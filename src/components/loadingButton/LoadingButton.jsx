import './loadingButton.css'

const LoadingButton = () => {
    return (
        <div className="container">
            <h1>Loading Button</h1>
            <div className="btns">
                <button>
                    <span className="loader"></span>
                    Loading
                </button>
            </div>
        </div>
    )
}

export default LoadingButton
