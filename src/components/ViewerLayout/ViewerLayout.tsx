import { Canvas } from '@react-three/fiber'
import { OrthographicCamera  } from '@react-three/drei'
import { ViewerGrid } from '../Models/ViewerGrid'
import { ViewerControls } from '../Models/ViewerControls'

import './styles.css'

export const ViewerLayout = () => {
	return (
		<div className="viewer-container">
			<Canvas
				frameloop="demand"
				orthographic
			>
				<OrthographicCamera
					makeDefault
					zoom={50}
					position={[0, 0, 50]}
					far={10000}
				/>
				<ViewerControls />
				<ViewerGrid />
			</Canvas>
		</div>
	)
}
