
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
    console.log("calling get categories")

    return fetch(`${api}/categories`, { headers })
            .then(res => res.json())
}

export const getAllPosts = () => {
    fetch(`${api}/posts`, { headers })
            .then(res => res.json())
}

export const addPost = (post) => {
    fetch(`${api}/posts`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ post })
    }).then(res => res.json())
}

export const getPost = (id) => {
    fetch(`${api}/posts/${id}`)
        .then(res => res.json())
}



export const votePostUp = (id) => {
    fetch(`${api}/posts/id`, {
        method: 'POST',
        headers,
        body: 'upVote'
    })
}

export const votePostDown = (id) => {
    fetch(`${api}/posts/id`, {
        method: 'POST',
        headers,
        body: 'downVote'
    })
}

export const editPost = (postContents) => {
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(postContents)
    })
    .then(res => res.json())
}

export const deletePost = (id) => {
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers
    })
    .then(res => res.json())
}

export const getAllCommentsForPost = (postId) => {
    fetch(`${api}/posts/${id}/comments`)
    .then(res => res.json())
}

export const addCommentToPost = (commentToPost) => {
    fetch(`${api}/comments`, {
        method: 'POST',
        headers,
        body: JSON.stringify(commentToPost)
    })
    .then(res => res.json())
}

export const getCommentDetails = (id) => {
    fetch(`${api}/comments/${id}`)
    .then(res => res.json())
}

export const voteOnComment = (id, wayOfVote) => {
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ wayOfVote })
    })
    .then(res => res.json())
}

export const updateComment = (id, commentBody) => {
    fetch(`${api}/comments/${id}`, {
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