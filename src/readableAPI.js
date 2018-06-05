
const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token,
    'Content-Type': 'application/json'
}

export const getCategories = () => {
    return fetch(`${api}/categories`, { headers })
            .then(res => res.json())
            .then(data => data.categories)
}

export const getAllPosts = () => {
    return fetch(`${api}/posts`, { headers })
    .then(res => res.json())
}

export const addPost = (post) => {
    return fetch(`${api}/posts`, {
        method: 'POST',
        headers,
        body: JSON.stringify( post )
    }).then(res => res.json())
}

export const editPost = (editedFields) => {
    return fetch(`${api}/posts/${editedFields.id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify( editedFields )
    }).then(res => res.json())
}

export const getPost = (id) => {
    return fetch(`${api}/posts/${id}`)
        .then(res => res.json())
}

export const votePost = (id, option) => {
    console.log('API: voting post up!')
    return fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            option
        })
    })
}

export const deletePost = (id) => {
    return fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers
    })
    .then(res => res.json())
}

export const getAllCommentsForPost = (id) => {
    return fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
}

export const addCommentToPost = (commentToPost) => {
    return fetch(`${api}/comments`, {
        method: 'POST',
        headers,
        body: JSON.stringify(commentToPost)
    })
    .then(res => res.json())
}

export const getCommentDetails = (id) => {
    return fetch(`${api}/comments/${id}`)
    .then(res => res.json())
}

export const voteOnComment = (id, wayOfVote) => {
   return fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ wayOfVote })
    })
    .then(res => res.json())
}

export const updateComment = (id, commentBody) => {
    return fetch(`${api}/comments/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(commentBody)
    })
}

export const deleteComment = (id) => {
    return fetch(`${api}/comments/${id}`, {
        method: 'DELETE',
        headers
    })
    .then(res => res.json())
}