import { useSelector } from 'react-redux'
import { getLineSegmentGeometry } from '../../utils/geometry'
import { RootState } from '../../store'
import { useMemo } from 'react'

export const PolygonView = () => {
	const polygons = useSelector((state: RootState) => state.viewerLayout.data.polygons)
	const polygonGeometries = useMemo(() => {
		return polygons.map((polygon) => getLineSegmentGeometry(polygon))
	}, [polygons])

	return <>
		<group>
			{
				polygonGeometries.map((geometry, index) => (
					<lineSegments key={index} geometry={geometry}>
						<meshStandardMaterial color="orange" />
					</lineSegments>
				))
			}
		</group>
	</>
}
