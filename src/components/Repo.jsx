function Repo({ item }) {
    return (
        <div className="card bg-white">
            <p>
                <strong> Name: </strong> {item.name}
            </p>
            <p>
                <strong> Languages: </strong> {item.language}
            </p>
            <p>
                <strong> Created on: </strong> {new Date(item.created_at).toLocaleString()}
            </p>
            {
                item.description &&
                <p>
                    {item.description}
                </p>
            }
        </div>
    )
}

export default Repo