import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "redux/store";

const Counter = () => {
    const value = useSelector(state => state.counter)
    const dispatch= useDispatch()

    const handleAddNumber = () => {
        dispatch(increment(100))
    }

    const handleDellNumber = () => {
        dispatch(decrement(100))
    }

    return(
        <div style={{
            margin: '10px',
            padding: '15px',
          }}>
            <p>{value}</p>
            <button type="button" onClick={handleAddNumber}>ADD</button>
            <button type="button" onClick={handleDellNumber}>DELL</button>
        </div>
    )
}

export default Counter;