import { Link } from "react-router-dom"

function User({ item: { avatar_url, login } }) {
    return (
        <div className="card text-center">
            <img src={avatar_url}
                alt={`picture of ${login}`}
                className="round-img"
                style={{ width: 130 }}
            />
            <h3>{login}</h3>

            <Link to={`/users/${login}`}>
                <button type="button" className="btn btn-dark"> Profile </button>
            </Link>
        </div>
    )
}

export default User