import { useState, useContext } from "react";

import GithubContext from "../contexts/GitHub/githubContext";
import AlertContext from "../contexts/Alert/alertContext";

function Search() {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [username, setUsername] = useState('');

    function readSearchInput(event) {
        setUsername(event.target.value);
    }

    function formSubmitHandler(event) {
        event.preventDefault();

        if (username) {
            githubContext.fetchUsers(username);
            setUsername('');
        } else {
            alertContext.showAlert('danger', 'Enter a Username');
        }
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <input type="text" value={username} onChange={readSearchInput} />
                <button type="submit" className="btn btn-block bg-primary"> Search Users </button>
            </form>

            <button type="button"
                className="btn btn-block bg-light my-1" onClick={githubContext.clearUserGrid}> Clear Users </button>
        </div>
    )
}

export default Search