import { Vector3, Plane, Vector2, Raycaster } from 'three'
import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MOUSE } from 'three'
import { RootState } from '../../store'
import { setGlobalBB } from '../../reducer/ViewerLayout.reducer'

const MOUSE_BUTTONS = {
	LEFT: MOUSE.RIGHT,
	MIDDLE: MOUSE.RIGHT,
	RIGHT: MOUSE.MIDDLE,
}
const pointIntersection = new Vector3()
const centerntersection = new Vector3()
const plane = new Plane()
const pNormal = new Vector3(0, 0, 1)
const rcstr = new Raycaster()

const getDivider = (size = 1) => {
	switch (true) {
		case (size > 50 && size <= 100):
			return 5
		case (size > 100 && size <= 150):
			return 5
		case (size > 150 && size <= 300):
			return 5
		case (size > 300 && size <= 500):
			return 10
		case (size > 500):
			return 10
	}

	return 1
}

export const ViewerControls = () => {
	const dispatch = useDispatch()
	const { camera, viewport, raycaster, } = useThree()
	const { center, globalBB } = useSelector((state: RootState) => ({
		center: state.viewerLayout.center,
		globalBB: state.viewerLayout.globalBB
	}))
	const vp = viewport.getCurrentViewport()

	const [isDrag, setIsDrag] = useState(false)
	const onStart = useCallback(() => setIsDrag(true), [])
	const onEnd = useCallback(() => setIsDrag(false), [])
	const onChange = useCallback(() => {

		plane.setFromNormalAndCoplanarPoint(
			pNormal,
			pointIntersection
		)
		raycaster.ray.intersectPlane(plane, pointIntersection)
		rcstr.setFromCamera(new Vector2(center.x, center.y), camera)
		rcstr.ray.intersectPlane(plane, centerntersection)

		const { width, height } = vp
		const fullWidth = width
		const fullHeight = height

		const newGlobalBB = [
			new Vector2(
				centerntersection.x - fullWidth / 2,
				centerntersection.y + fullHeight / 2,
			),
			new Vector2(
				centerntersection.x + fullWidth / 2,
				centerntersection.y - fullHeight / 2,
			)
		]

		if (!globalBB[0].equals(newGlobalBB[0]) || !globalBB[1].equals(newGlobalBB[1])) {
			const [v1, v2] = newGlobalBB
			const size = v2.clone().sub(v1).length()
			const divider = getDivider(size)

			dispatch(setGlobalBB({ globalBB: newGlobalBB, divider }))
		}
	}, [vp, raycaster, center, camera, globalBB, dispatch ])

	return (
		<OrbitControls
			mouseButtons={MOUSE_BUTTONS}
			onStart={onStart}
			onEnd={onEnd}
			onChange={onChange}
			enableDamping={false}
			enableRotate={false}
		/>
	)
}
