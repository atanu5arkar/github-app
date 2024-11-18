import { RESET_USERS, SET_LOADING, SET_PROFILE, SET_REPOS, SET_USERS } from "../actionTypes.js";

export default function githubReducer(state, action) {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
            
        case SET_USERS:
            return {
                ...state,
                loading: false,
                users: action.payload
            };

        case RESET_USERS:
            return {
                ...state,
                users: []
            };

        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload
            };

        case SET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            };

        default:
            return state;
    }
}