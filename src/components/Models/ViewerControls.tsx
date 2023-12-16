import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useCallback, useState } from 'react'
import { MOUSE } from 'three'

const MOUSE_BUTTONS = {
	LEFT: MOUSE.RIGHT,
	MIDDLE: MOUSE.RIGHT,
	RIGHT: MOUSE.MIDDLE,
}

export const ViewerControls = () => {
	const { camera, pointer } = useThree()
	const [isDrag, setIsDrag] = useState(false)
	const onStart = useCallback(() => setIsDrag(true), [])
	const onEnd = useCallback(() => setIsDrag(false), [])
	const onChange = useCallback(() => {
		if (!isDrag) return
		console.log({ camera, pointer })
	}, [isDrag, camera, pointer ])

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
