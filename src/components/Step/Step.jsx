

const Step = () => {
    return(
        <div>
            <form onSubmit={handleSubmit} role="search">
                <input type="number" name="step" placeholder="step" defaultValue={step}/>
                <button type="submit">Step</button>
            </form>
        </div>
    )
}

export default Step;