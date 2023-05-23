

const Cash = () => {
    return(
        <>
            <div style={{fontSize: '30px', marginRight: '10px'}}>{cash}</div>
            <button type="button" onClick={()=> handleAddCash(Number(prompt()))}>ADD CASH</button>
            <button type="button" onClick={()=> handleGetCash(Number(prompt()))}>GET CASH</button>
        </>
    )
}

export default Cash;