import { Vector2 } from 'three'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Mouse } from '../interface/global'

const initialState = {
	canvasSize: {
		width: window.innerWidth,
		height: window.innerHeight,
	},
	mouse: { x: 0, y: 0 },
	center: { x: 0, y: 0 },
	globalBB: [new Vector2(), new Vector2()],
	divider: 1,
}

export const viewerLayoutSlice = createSlice({
	name: 'viewerLayout',
	initialState,
	reducers: {
		setCanvasSize(state, action: PayloadAction<{ width: number, height: number }>) {
			state.canvasSize = action.payload
		},
		setMouse(state, action: PayloadAction<{ mouse: Mouse, center: Mouse }>) {
			state.mouse = action.payload.mouse
			state.center = action.payload.center
		},
		setGlobalBB(state, action: PayloadAction<{ globalBB: Vector2[], divider: number }>) {
			state.globalBB = action.payload.globalBB
			state.divider = action.payload.divider
		},
	}
})

export const { setCanvasSize, setMouse, setGlobalBB } = viewerLayoutSlice.actions

export const viewerLayout = viewerLayoutSlice.reducer
