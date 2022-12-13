import { useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "../stores/counterSlice"

export default function CounterActions() {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(decrement())}> Azalt (-) </button>
            <button onClick={() => dispatch(increment())}> Arttır (+)</button>
            <button onClick={() => dispatch(incrementByAmount(4))}> 4 Arttır </button>
        </div>
    )
}