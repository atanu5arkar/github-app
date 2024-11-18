import { Link, useParams } from "react-router-dom"
import { useEffect, useContext } from "react";
import GithubContext from "../contexts/GitHub/githubContext";

import Loading from "./Loading";
import Repo from "./Repo";

function Profile() {
    const githubContext = useContext(GithubContext);
    const { login } = useParams();

    useEffect(() => { githubContext.getUserProfile(login) }, []);

    const {
        hireable,
        name,
        avatar_url,
        location,
        bio,
        html_url,
        company,
        blog,
        followers,
        following,
        public_repos,
        public_gists
    } = githubContext.profile ?? {};

    if (githubContext.loading) return <Loading />

    return (
        <div>
            <Link to="/" className="btn btn-light"> Back To Search </Link>

            Hireable &nbsp;
            {
                hireable
                    ? <i className="fas fa-check text-success"></i>
                    : <i className="fas fa-times-circle text-danger"></i>
            }

            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" alt="" style={{ width: '150px' }} />
                    <h1> {name} </h1>
                    {
                        location && <p> Location : {location} </p>
                    }
                </div>
                <div>
                    {
                        bio && <>
                            <h3>Bio</h3>
                            <p> {bio} </p>
                        </>
                    }
                    <a href={html_url} className="btn btn-dark my-1" target="_blank">Visit GitHub Profile</a>
                    <ul>
                        <li>
                            <strong>Username : </strong> {login}
                        </li>
                        {
                            company && <li>
                                <strong>Company : </strong> {company}
                            </li>
                        }
                        {
                            blog && <li>
                                <strong>Website : </strong> {blog}
                            </li>
                        }
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers : {followers}</div>
                <div className="badge badge-success">Following : {following}</div>
                <div className="badge badge-light">Public Repositories : {public_repos}</div>
                <div className="badge badge-dark">Public Gists : {public_gists}</div>
            </div>

            <h3> Top 5 Repositories </h3>
            <div id="repos" className="card bg-light grid-3">
                {
                    githubContext.repos.map((item, index) =>
                        <Repo item={item} key={index} />
                    )
                }
            </div>
        </div>
    )
}

export default Profile