import * as THREE from 'three'
import { Mouse } from '../interface/global'

export const getSpriteText = (text: string) => {
	const canvas = document.createElement('canvas')
	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

	canvas.width = 400
	canvas.height = 400

	ctx.font = "180px arial Bold";
	ctx.fillStyle = "rgba(255,0,0,1)";
	ctx.strokeStyle = "rgba(255,0,0,1)";
	ctx.lineWidth = 4;

	ctx.fillText( text, 0, 180 + 4);

	const texture = new THREE.Texture(canvas)
	texture.needsUpdate = true;

	return texture
}


export const getWorldPosition = (mouse: Mouse, camera: THREE.Camera) => {
	const vector = new THREE.Vector3()
	const pos = new THREE.Vector3()
	vector.set(mouse.x, mouse.y, 1)
	vector.unproject(camera)
	vector.sub(camera.position).normalize()
	const distance = -camera.position.z / vector.z
	pos.copy(camera.position).add(vector.multiplyScalar(distance))

	return pos
}
