import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Text, TextArea } from "react-form";
import { Grid, Row, Col, Button, FormGroup, ControlLabel } from 'react-bootstrap';
import { v1 as uuid } from 'uuid'
import { addPost } from '../readableAPI'
import { createPostActionCreator } from '../actions/posts.actions'
import { Link, withRouter } from 'react-router-dom'

class CreatePost extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }

    createPost () {

    }

    getTimestamp () {
        return Math.round((new Date()).getTime() / 1000);
    }

    createPost ( form ) {

        const { body, author, title } = form.submittedValues 

        const post = {
            id: uuid(),
            timestamp: this.getTimestamp(),
            title: title,
            body: body,
            author: author,
            category: "react",
            voteScore: 1,
            deleted: false,
            commentCount: 0,
            comments: []
        }

        console.log('created post:', post);

        addPost(post).then(() => {
            this.props.addPost(post)
        })
        
    }

    render () {
        return (
            <div>
                <Form onSubmit={submittedValues => this.createPost( { submittedValues } )}>
                    { formApi => (
                            <form onSubmit={formApi.submitForm}>
                            <Grid>
                                <Row>
                                    <FormGroup>
                                        <ControlLabel>Author</ControlLabel>
                                        <Text className="form-control" field="author" placeholder="Author" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Title</ControlLabel>
                                        <Text className="form-control" field="title" placeholder="Title" />
                                    </FormGroup>
                                    <FormGroup>
                                        <ControlLabel>Blog</ControlLabel>
                                        <TextArea className="form-control" field="body" placeholder="wite blog post here" />
                                    </FormGroup>
                                </Row>
                                <Row>
                                    <Link to={"/posts/" + this.props.category}>
                                        <Button type="submit">Submit</Button>
                                    </Link>
                                </Row>
                            </Grid>
                            </form>
                        )}
                </Form>

            </div>)

    }
}

const mapStateToProps = (state, props) => ({
    category: state.navigation.selectedCategory
})

const mapDispatchToProps = dispatch => ({
    addPost: (post) => dispatch(createPostActionCreator(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)