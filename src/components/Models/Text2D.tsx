import { Html } from '@react-three/drei'

export const Text2D = ({ text, position }: { text: string, position: [number, number, number] }) => {
	return (
		<Html position={position}>
			<div>{text}</div>
		</Html>
	)
}
