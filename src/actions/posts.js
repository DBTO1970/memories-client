import * as api from '../api';

//Action Creators

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: "FETCH_ALL",  payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (_id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(_id, post);

        dispatch({ type: 'UPDATE', paylad: data });
    } catch (error) {
        console.log(error.message);
    }
}