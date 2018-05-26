import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Text, TextArea } from "react-form";
import { Grid, Row, Col, Button } from 'react-bootstrap';



class CreatePost extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }

    createPost () {

    }

    createPost ( values ) {
        console.log('submitted', values);
    }

    render () {
        return (
            <div>
                
                <Form onSubmit={submittedValues => this.createPost( { submittedValues } )}>
                    { formApi => (
                            <form onSubmit={formApi.submitForm}>
                            <Grid>
                                <Row>
                                    <Text field="firstName" placeholder="First Name" />
                                </Row>
                                <Row>
                                    <TextArea field="contents" placeholder="wite blog post here" />
                                </Row>
                                <Row>
                                    <Button type="submit">Submit</Button>
                                </Row>
                            </Grid>
                            </form>
                        )}
                </Form>

            </div>)

    }
}

const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)