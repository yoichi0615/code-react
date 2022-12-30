import { useReducer } from "react"

const CALC_OPTIONS = ['add', 'minus', 'divide', 'multiply']

const reducer = (state, {eventType, payload}) => {
	switch(eventType) {
		case 'change':
			const { name, value } = payload
			return { ...state, [name]: value }
		case 'add':
			return { ...state, result: state.a + state.b }
		case 'minus':
			return { ...state, result: state.a - state.b }
		case 'divide':
			return { ...state, result: state.a / state.b }
		case 'multiply':
			return { ...state, result: state.a * state.b }
		default:
			throw new Error("無効な操作です")
	}
}

export const Reducer = () => {
	const initState = {
		a: 5,
		b: 2,
		result: 7
	}

	const [ state, dispatch ] = useReducer(reducer, initState)

	const calculate = (e) => {
		dispatch({eventType: e.target.value})
	}

	const numChangeHandler = (e) => {
		dispatch({eventType: 'change', payload: {value: parseInt(e.target.value), name: e.target.name}})
	}

  return (
		<>
			<div>
				a:
				<input 
					type="number" 
					name="a"
					value={state.a}
					onChange={numChangeHandler}
				/>
			</div>
			<div>
			  b:
				<input 
					type="number" 
					name="b"
					value={state.b}
					onChange={numChangeHandler}
				/>
			</div>
			<select onChange={calculate}>
				{CALC_OPTIONS.map((type) => (
					<option key={type} value={type}>
						{type}
					</option>
				))}
			</select>
			<h3>合計：{state.result}</h3>
		</>
	)
}