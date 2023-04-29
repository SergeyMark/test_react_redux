import { useDispatch, useSelector } from "react-redux";

const Cash = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)

    const handleAddCash = (cash) => {
        dispatch({type: 'ADD_CASH', payload: cash})
    }
    
    const handleGetCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }

    return(
        <>
            <div style={{fontSize: '30px', marginRight: '10px'}}>{cash}</div>
            <button type="button" onClick={()=> handleAddCash(Number(prompt()))}>ADD CASH</button>
            <button type="button" onClick={()=> handleGetCash(Number(prompt()))}>GET CASH</button>
        </>
    )
}

export default Cash;