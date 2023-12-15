import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	canvasSize: {
		width: window.innerWidth,
		height: window.innerHeight,
	},
}

export const viewerLayoutSlice = createSlice({
	name: 'viewerLayout',
	initialState,
	reducers: {
		setCanvasSize(state, action: PayloadAction<{ width: number, height: number }>) {
			state.canvasSize = action.payload
		},
	}
})

export const { setCanvasSize } = viewerLayoutSlice.actions

export const viewerLayout = viewerLayoutSlice.reducer
