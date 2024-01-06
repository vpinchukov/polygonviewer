import * as THREE from 'three'
import { AxesLabels } from './AxesLabels'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const SIZE = 1000000
const GRID_ROTATION = new THREE.Euler(Math.PI / 2, 0, 0)
const AXES_PI_ROTATION = new THREE.Euler(Math.PI / 2, Math.PI, 0)
const cellColor = new THREE.Color('black')
const sectionColor = new THREE.Color('#d3d3d3')

export const ViewerGrid = () => {
	const divider = useSelector((state: RootState) => state.viewerLayout.divider)
	const division = SIZE / divider
	const numbers = Array.from(Array(50).keys()).map(v => v * divider)

	return <>
		<gridHelper
			args={[SIZE, division, cellColor, sectionColor]}
			rotation={GRID_ROTATION}
			// onClick={(e) => console.log(e.point)}
		/>
		<axesHelper rotation={GRID_ROTATION} args={[SIZE]} />
		<axesHelper rotation={AXES_PI_ROTATION} args={[SIZE]} />
		<AxesLabels numbers={numbers} step={1} />
	</>
}
