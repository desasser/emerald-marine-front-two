const axios = require('axios');

const URL_PREFIX = 'https://designly-freelance-back.herokuapp.com'

const API = {
    // Wake up server
    greeting: () => {
        return axios.get(`${URL_PREFIX}/`)
    },
    // User routes
    addNewUser: (token, userData) => {
        return axios.post(`${URL_PREFIX}/users/new`, userData, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        })
    },
    loginUser: userData => {
        return axios.post(`${URL_PREFIX}/users`, userData)
    },
    getAllUsers: () => {
        return axios.get(`${URL_PREFIX}/users`)
    },
    updateUserInfo: (username, token, userData) => {
        return axios.put(`${URL_PREFIX}/users/${username}`, userData, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    deleteUser: username => {
        return axios.delete(`${URL_PREFIX}/users/${username}`)
    },
    getVip: token => {
        return axios.get(`${URL_PREFIX}/vip`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        })
    },
    validateHuman: token => {
      return axios.post(`${URL_PREFIX}/hooman`, token)
    },

    // Blog post routes
    getAllBlogPosts: () => {
        return axios.get(`${URL_PREFIX}/blogposts`)
    },
    getOneBlogPost: id => {
        return axios.get(`${URL_PREFIX}/blogposts/${id}`)
    },
    createBlogPost: (postData, token) => {
        return axios.post(`${URL_PREFIX}/blogposts`, postData, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    updateBlogPost: (id, postData, token) => {
        return axios.put(`${URL_PREFIX}/blogposts/${id}`, postData, {
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
    },

    // News article routes
    getAllNewsArticles: () => {
        return axios.get(`${URL_PREFIX}/news`)
    },
    getOneNewsArticle: id => {
        return axios.get(`${URL_PREFIX}/news/${id}`)
    },
    createNewsArticle: (articleData, token) => {
        return axios.post(`${URL_PREFIX}/news`, articleData, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    updateNewsArticle: (id, articleData, token) => {
        return axios.put(`${URL_PREFIX}/news/${id}`, articleData, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    deleteNewsArticle: (id, token) => {
        return axios.delete(`${URL_PREFIX}/news/${id}`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    }, 

    // Press release routes
    getAllPressReleases: () => {
        return axios.get(`${URL_PREFIX}/press`)
    },
    getOnePressRelease: id => {
        return axios.get(`${URL_PREFIX}/press/${id}`)
    },
    createPressRelease: (pressData, token) => {
        return axios.post(`${URL_PREFIX}/press`, pressData, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    updatePressRelease: (id, pressData, token) => {
        return axios.put(`${URL_PREFIX}/press/${id}`, pressData, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    }, 
    deletePressRelease: (id, token) => {
        return axios.delete(`${URL_PREFIX}/press/${id}`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },

    // Product Routes
    getAllProducts: () => {
        return axios.get(`${URL_PREFIX}/products`)
    },
    getOneProduct: id => {
        return axios.get(`${URL_PREFIX}/products/${id}`)
    },
    createProduct: (productData, token) => {
        return axios.post(`${URL_PREFIX}/products`, productData, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    updateProduct: (id, productData, token) => {
        return axios.put(`${URL_PREFIX}/products/${id}`, productData, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    deleteProduct: (id, token) => {
        return axios.delete(`${URL_PREFIX}/products/${id}`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },

    // Mailing list routes
    getMailingList: token => {
        return axios.get(`${URL_PREFIX}/mailing`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    addToMailingList: userData => {
        return axios.post(`${URL_PREFIX}/mailing`, userData)
    },
    updateMailingList: (userData, id, token) => {
        return axios.put(`${URL_PREFIX}/mailing/${id}`, userData, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    removeFromMailingList: id => {
        return axios.delete(`${URL_PREFIX}/mailing/${id}`)
    },

    // Testing reminders routes
    getTestList: token => {
        return axios.get(`${URL_PREFIX}/test`, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    addToTestList: userData => {
        return axios.post(`${URL_PREFIX}/test`, userData)
    },
    updateTestList: (userData, id, token) => {
        return axios.put(`${URL_PREFIX}/test/${id}`, userData, {
            headers: {
                authorization: `Bearer: ${token}`
            }
        });
    },
    removeFromTestList: id => {
        return axios.delete(`${URL_PREFIX}/test/${id}`)
    },

    // Shippo rate request
    getShippingRate: addressData => {
        return axios.post(`${URL_PREFIX}/shippo`, addressData)
    }

}

export default API;