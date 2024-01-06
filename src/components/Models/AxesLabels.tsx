import { Text2D } from './Text2D'

export const AxesLabels = ({ numbers, step }: { numbers: number[], step: number }) => {

	return (
		<group>
			<group>
				{
					numbers.map((number) => (
						<Text2D key={number} text={`${number}`} position={[0, number * step, 0]} />
					))
				}
			</group>
			<group>
				{
					numbers.map((number) => (
						<Text2D key={number} text={`${number}`} position={[0, -number * step, 0]} />
					))
				}
			</group>
			<group>
				{
					numbers.map((number) => (
						<Text2D key={number} text={`${number}`} position={[number * step, 0, 0]} />
					))
				}
			</group>
			<group>
				{
					numbers.map((number) => (
						<Text2D key={number} text={`${number}`} position={[-number * step, 0, 0]} />
					))
				}
			</group>
		</group>
	)
}
