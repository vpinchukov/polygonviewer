import * as THREE from 'three'

const SIZE = 1000000
const GRID_ROTATION = new THREE.Euler(Math.PI / 2, 0, 0)
const AXES_PI_ROTATION = new THREE.Euler(Math.PI / 2, Math.PI, 0)
const cellColor = new THREE.Color('black')
const sectionColor = new THREE.Color('#d3d3d3')

export const ViewerGrid = () => (
	<>
		<gridHelper
			args={[SIZE, SIZE, cellColor, sectionColor]}
			rotation={GRID_ROTATION}
		/>
		<axesHelper rotation={GRID_ROTATION} args={[SIZE]} />
		<axesHelper rotation={AXES_PI_ROTATION} args={[SIZE]} />
	</>
)
