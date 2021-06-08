const axios = require('axios');

const URL_PREFIX = 'https://designly-freelance-back.herokuapp.com/'

const API = {
    // User routes
    addNewUser: userData => {
        return axios.post(`${URL_PREFIX}/users/new`, userData)
    },
    loginUser: userData => {
        return axios.post(`${URL_PREFIX}/users`, userData)
    },
    getAllUsers: () => {
        return axios.get(`${URL_PREFIX}/users`)
    },
    updateUserInfo: (username, token) => {
        return axios.put(`${URL_PREFIX}/users/${username}`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    deleteUser: username => {
        return axios.delete(`${URL_PREFIX}/users/${username}`)
    },

    // Blog post routes
    getAllBlogPosts: () => {
        return axios.get(`${URL_PREFIX}/blogposts`)
    },
    getOneBlogPost: id => {
        return axios.get(`${URL_PREFIX}/blogposts/${id}`)
    },
    createBlogPost: token => {
        return axios.post(`${URL_PREFIX}/blogposts`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    updateBlogPost: (id, token) => {
        return axios.put(`${URL_PREFIX}/blogposts/${id}`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    deleteBlogPost: (id, token) => {
        return axios.delete(`${URL_PREFIX}/blogposts/${id}`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    }

}