import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addCommentToPost } from './../readableAPI'
import { addCommentToPostActionCreator } from './../actions/comments.actions'
import { v1 as uuid } from 'uuid'
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

class AddComment extends React.Component {
  constructor() {
    super();

    this.state = {
        input: '',
        author: '',
        modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    
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
    this.setState({
      modalIsOpen: true,
      author: '',
      input: ''});
  }

  closeModal () {
    this.setState({modalIsOpen: false});
  }

  afterOpenModal () {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
  }

  addComment () {

    const model = {
        id: uuid(),
        timestamp: this.getTimestamp(),
        body: this.state.input,
        author: this.state.author,
        parentId: this.props.post.id
    }

    addCommentToPost(model).then(() => {
        console.log('added comment');
        this.props.addComment(model)
    })

    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <Button className="button" onClick={this.openModal}>Add Comment</Button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Add Comment</h2>

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
                
                <Button onClick={this.addComment}>Add</Button>
                <Button onClick={this.closeModal}>Close</Button>
          </form>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
    addComment: (comment) => dispatch(addCommentToPostActionCreator(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)