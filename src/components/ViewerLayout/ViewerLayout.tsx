import { useViewerLayoutHook } from './ViewerLayout.hooks'
import './styles.css'

export const ViewerLayout = () => {
	const { canvasSize } = useViewerLayoutHook()
	console.log({ canvasSize })

	return (
		<div className="viewer-container">
			<canvas
				id="main-canvas"
			/>
		</div>
	)
}
