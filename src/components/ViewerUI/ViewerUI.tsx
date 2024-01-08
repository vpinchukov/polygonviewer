import { ChangeEvent, FC, useCallback } from 'react';
import { Input } from 'antd';

import './styles.css'
import { useDispatch } from 'react-redux';
import { addPolygon } from '../../reducer/ViewerLayout.reducer';

const { TextArea } = Input;

export const ViewerUI: FC = () => {
	const dispatch = useDispatch()
	const handleTextChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
		try {
			const res = JSON.parse(event.target.value || '')
			dispatch(addPolygon(res))
			console.log(res)
		} catch (e) {
			console.warn(e)
		}
	}, [dispatch])

	return (
		<>
			<div className="input-area-container">
				<TextArea
					onChange={handleTextChange}
					rows={4}
				/>
			</div>
		</>
	)
}
