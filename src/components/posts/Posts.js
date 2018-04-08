import React from 'react'

//import * as ReadableAPI from './../../readableAPI'
import { getAllPosts } from './../../readableAPI'
import { PageHeader, Panel, Button } from 'react-bootstrap'


class Posts extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {

        //let posts = getAllPosts();

        //console.log(posts);

        getAllPosts().then((posts) => {
            console.log('posts', posts)
            this.setState({ posts })
        })
    }

    render() {

        return (
            <div>
                <PageHeader>Posts</PageHeader>
                <ol>
                {  this.state.posts.map( (post) => ( 
                    <Panel>
                        <Panel.Heading key={post.id}>{post.title}</Panel.Heading>
                        <Panel.Body>{post.body}
                        <br />
                        <Button>Vote Down</Button>
                        <Button>Vote Up</Button>
                        </Panel.Body>
                        
                    </Panel>
                ))}
                </ol>
            </div>
        )
    }

}

export default Posts
