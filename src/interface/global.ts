export interface XY {
	x: number;
	y: number;
}

export interface Mouse extends XY {}

export interface PolygonObject {
	points: {
		x: number;
		y: number
	}[];
	holes: {
		x: number;
		y: number;
	}[][];
}
