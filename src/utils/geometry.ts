import { Vector3, Vector2, Shape, Path, BufferAttribute, BufferGeometry } from 'three'
import { PolygonObject, XY } from '../interface/global';

export const getShape = (points: (Vector3|XY)[], holes: (Vector3|XY)[][]) => {
  const shape = new Shape()
  points.forEach((p, i) => {
    i ? shape.lineTo(p.x, p.y) : shape.moveTo(p.x, p.y)
  })
  shape.holes = (holes || []).reduce<Path[]>((acc, h) => {
    const path = new Path()
    h.forEach((p, i) => {
      i ? path.lineTo(p.x, p.y) : path.moveTo(p.x, p.y)
    })
    acc.push(path)

    return acc
  }, [])

  return shape
}

export const polygonObjectToShape = (po: PolygonObject) => {
	return getShape(po.points, po.holes)
}

const getSegments = (pts: (Vector2|XY)[]) => {
  return pts.reduce<(Vector2|XY)[]>((acc, p1, index) => {
    const p2 = pts[index + 1] || pts[0]
    acc.push(p1, p2)

    return acc
  }, [])
}

export const getLineSegmentGeometry = (po: PolygonObject) => {
	const segmentPoints = getSegments(po.points)
	const segmentHolePoints = po.holes.map(hPoints => getSegments(hPoints))
	const allPoints = [...segmentPoints, ...segmentHolePoints.flat()]

	const geometry = new BufferGeometry()
	const positions = new Float32Array(allPoints.length * 3 * 3)

	allPoints.forEach((p, index) => {
    const p0index = index * 3
    positions[p0index] = p.x
    positions[p0index + 1] = p.y
    positions[p0index + 2] = 0
  })
  geometry.setAttribute('position', new BufferAttribute(positions, 3))

	return geometry
}
