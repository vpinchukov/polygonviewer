import { Canvas } from '@react-three/fiber'
import { Bvh, OrthographicCamera } from '@react-three/drei'
import { ViewerGrid } from '../Models/ViewerGrid'
import { ViewerControls } from '../Models/ViewerControls'

import './styles.css'
import { MouseEvent, useCallback, useRef } from 'react'
import { Mouse } from '../../interface/global'
import { useDispatch } from 'react-redux'
import { setMouse } from '../../reducer/ViewerLayout.reducer'

export const ViewerLayout = () => {
	const canvas = useRef<HTMLCanvasElement>(null)
	const dispatch = useDispatch()
	const handleMouseMove = useCallback((event: MouseEvent) => {
		if (!canvas.current) return

		const rect = (canvas.current).getBoundingClientRect()
		const mouse = {
			x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
			y: -((event.clientY - rect.top) / rect.height) * 2 + 1,
		} as Mouse
		const center = {
			x: ((rect.right - rect.left) / 2 / rect.width) * 2 - 1,
			y: -((rect.bottom - rect.top) / 2 / rect.height) * 2 + 1,
		} as Mouse
		dispatch(setMouse({ mouse, center }))
	}, [canvas, dispatch])

	return (
		<div className="viewer-container" onMouseMove={handleMouseMove}>
			<Canvas
				ref={canvas}
				frameloop="demand"
				orthographic
			>
				<Bvh firstHitOnly>
					<OrthographicCamera
						makeDefault
						zoom={50}
						position={[0, 0, 50]}
						far={10000}
					/>
					<ViewerControls />
					<ViewerGrid />
				</Bvh>
			</Canvas>
		</div>
	)
}
