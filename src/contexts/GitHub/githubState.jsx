import axios from "axios";
import { useReducer } from "react";

import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";
import { RESET_USERS, SET_LOADING, SET_PROFILE, SET_REPOS, SET_USERS } from "../actionTypes.js";

function GithubState(props) {
    const initialState = {
        users: [],
        loading: false,
        profile: null,
        repos: []
    };
    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Triggered by the Search component
    async function fetchUsers(username) {
        try {
            dispatch({ type: SET_LOADING });
            const res = await axios.get(`https://api.github.com/search/users?q=${username}`);
            dispatch({ type: SET_USERS, payload: res.data.items });
        } catch (error) {
            console.log(error);
        }
    }

    // Triggered by the Search component
    function clearUserGrid() {
        dispatch({ type: RESET_USERS });
    }

    // Triggered by the Profile component
    async function getUserProfile(username) {
        try {
            dispatch({ type: SET_LOADING });
            const res1 = await axios.get(`https://api.github.com/users/${username}`);
            const res2 = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);

            dispatch({ type: SET_PROFILE, payload: res1.data });
            dispatch({ type: SET_REPOS, payload: res2.data });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <GithubContext.Provider value={{
            users: state.users,
            loading: state.loading,
            profile: state.profile,
            repos: state.repos,
            fetchUsers,
            clearUserGrid,
            getUserProfile
        }}>
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState;