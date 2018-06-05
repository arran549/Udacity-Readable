import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Form, Text, TextArea, formApi } from "react-form";
import { Grid, Row, Col, Button, FormGroup, ControlLabel } from 'react-bootstrap';
import { v1 as uuid } from 'uuid'
import { editPost } from '../readableAPI'
import { editPostActionCreator } from '../actions/posts.actions'
import { Link, withRouter } from 'react-router-dom'

class EditPost extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            
        };

        this.updateTitle = this.updateTitle.bind(this);
        this.updateAuthor = this.updateAuthor.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        
        this.setState({
            author: this.props.post.author,
            body: this.props.post.body,
            title: this.props.post.title
        })
     }

     componentWillReceiveProps (nextProps) {
        console.log('editing post:', this.props.match.params.id)

        this.setState({
            author: nextProps.post.author,
            body: nextProps.post.body,
            title: nextProps.post.title
        })
     }
     
    getTimestamp () {
        return Math.round((new Date()).getTime() / 1000);
    }


    updateAuthor(event) {
        this.setState({author: event.target.value})
    }

    updateBody(event) {
        this.setState({body: event.target.value})
    }

    updateTitle(event) {
        this.setState({title: event.target.value})
    }


    handleSubmit (event) {

        const { body, author, title } = this.state

        const postFields = {
            id: this.props.post.id,
            author,
            title,
            body
        }

        console.log(postFields);

        editPost(postFields).then(() => {
            this.props.editPost(postFields)
            this.props.history.push('/posts/')
        })

        event.preventDefault();
    }

    render () {

        const { post } = this.props

        console.log('post:', post);

        return (
            <form onSubmit={this.handleSubmit}>
                <Grid>
                <Row>
                    <FormGroup>
                        <ControlLabel>Author</ControlLabel>
                        <input type='text' className="form-control"  placeholder="Author" value={this.state.author} onChange={this.updateAuthor} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Title</ControlLabel>
                        <input  type="text" className="form-control"  placeholder="Title" value={this.state.title} onChange={this.updateTitle} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Blog</ControlLabel>
                        <textarea className="form-control" placeholder="wite blog post here" value={this.state.body} onChange={this.updateBody} />
                    </FormGroup>
                </Row>
                <Row>
                    <Button type="submit" value="Update">Update</Button>
                </Row>
                </Grid>

            </form>)
    }
}

const mapStateToProps = (state, props) => {
    console.log("ran!");
    const selectedPostId = props.match.params.id;

    return {
        post: state.posts.all.length && state.posts.all.filter((post) => post.id === selectedPostId, [])[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editPost: (postFields) => dispatch(editPostActionCreator(postFields))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPost))