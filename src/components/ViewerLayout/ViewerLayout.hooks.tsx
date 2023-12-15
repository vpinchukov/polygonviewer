import { useSelector } from "react-redux"
import { RootState } from "../../store"

export const useViewerLayoutHook = () => {
	const canvasSize = useSelector((state: RootState) => state.viewerLayout)

	return { canvasSize }
}
