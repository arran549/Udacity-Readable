import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { editCommentToPost } from './../readableAPI'
import { editCommentToPostActionCreator } from './../actions/comments.actions'
import { v1 as uuid } from 'uuid'
import DeleteCommentButton from './DeleteCommentButton';
import {MdEdit} from 'react-icons/lib/md'
import '../styling.button.css'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

ReactModal.setAppElement('#root')

class EditComment extends React.Component {
  constructor() {
    super();

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.editComment = this.editComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);

    this.state = {
        modalIsOpen: false
    };
  }

  componentDidMount (){
    const { comment } = this.props;

    this.setState({id: comment.id})
    this.setState({input: comment.body})
    this.setState({author: comment.author})
  }

  getTimestamp () {
    return Math.round((new Date()).getTime() / 1000);
  }

  handleAuthor (event) {
      this.setState({author: event.target.value});
  }

  handleChange (event) {
    this.setState({input: event.target.value});
  }

  openModal () {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal () {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

  editComment () {

    const model = {
        ...this.props.comment,
        body: this.state.input,
        author: this.state.author
    }

    editCommentToPost(model).then(() => {
        console.log('updated comment', model);
        this.props.editComment(model)
    })

    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <Button className="button" onClick={this.openModal}>
        <MdEdit icon="edit"></MdEdit>Edit Comment</Button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}> Edit Comment</h2>

          <div>Please enter your comment!</div>
          <form>

                <FormGroup controlId="author">
                    <ControlLabel>Author</ControlLabel>
                    <FormControl type="text" value={this.state.author} onChange={this.handleAuthor} placeholder="Author" />
                </FormGroup>
                <FormGroup controlId="comment">
                    <ControlLabel>Comment</ControlLabel>
                    <FormControl value={this.state.input} onChange={this.handleChange} componentClass="textarea" placeholder="comment" />
                </FormGroup>
                
                <Button onClick={this.editComment}>Update</Button>
          </form>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
    editComment: (comment) => dispatch(editCommentToPostActionCreator(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditComment)