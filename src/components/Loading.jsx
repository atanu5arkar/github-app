import spinner from '../assets/load-spinner.gif'

function Loading() {
    return (
        <center>
            <img src={spinner} alt="loading animation" style={{ width: 200 }} />
        </center>
    )
}

export default Loading