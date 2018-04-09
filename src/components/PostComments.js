import React from 'react'
import { connect } from 'react-redux'
import { Badge } from 'react-bootstrap'

class PostComments extends React.Component {

    state = { 

    }

    render() {
        return (
            <div>
                <Badge>Comments: {this.props.post.commentCount}</Badge>
            </div>   
        );
    }

}



const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PostComments)
