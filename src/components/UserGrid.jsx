import { useContext } from "react";

import User from "./User"
import Loading from './Loading'
import GithubContext from "../contexts/GitHub/githubContext";

function UserGrid() {
    const githubContext = useContext(GithubContext);

    if (githubContext.loading) return <Loading />
    
    return (
        <div className="grid-4">
            {
                githubContext.users.map((item, index) => 
                    <User item={item} key={index} />
                )
            }
        </div>
    )
}

export default UserGrid