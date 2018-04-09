
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
        body: JSON.stringify({ post })
    }).then(res => res.json())
}

export const getPost = (id) => {
    return fetch(`${api}/posts/${id}`)
        .then(res => res.json())
}

export const votePostUp = (id) => {
    return fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers,
        body: {
            option: 'upVote'
        }
    })
}

export const votePostDown = (id) => {
    return  fetch(`${api}/posts/id`, {
        method: 'POST',
        headers,
        body: {
            option: 'downVote'
        }
    })
}

export const editPost = (id, postContents) => {
    return fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(postContents)
    })
    .then(res => res.json())
}

export const deletePost = (id) => {
    return fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers
    })
    .then(res => res.json())
}

export const getAllCommentsForPost = (id) => {
    return fetch(`${api}/posts/${id}/comments`)
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
    fetch(`${api}/comments/${id}`, {
        method: 'DELETE',
        headers
    })
    .then(res => res.json())
}