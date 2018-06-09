import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { Link, withRouter } from 'react-router-dom'
import { Panel, PageHeader, Well, Button, DropdownButton, MenuItem, ButtonGroup, FormControl, ControlLabel, FormGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
import { selectCategoryActionCreator } from '../actions/navigation.actions'
import CreatePostButton from './CreatePostButton'

class Posts extends React.Component {

    constructor() {
        super()
        this.sortByDate = this.sortByDate.bind(this);
        this.sortByScore = this.sortByScore.bind(this);
        this.orderBy = this.orderBy.bind(this);
    }

    state = {
        sortByCategory: 'timestamp',
        sortByAscending: false
    }

    componentDidMount() {

        const { match: { params } } = this.props;

        if(params.category) {
            this.props.selectCategory(params.category)
        }
    }

    sortByScore () {
        this.setState({sortByCategory: 'voteScore'})
    }

    sortByDate () {
        this.setState({sortByCategory: 'timestamp'})
    }

    orderBy (event) {
        var sortByAscending = event.target.value === 'ascending';
        this.setState({sortByAscending: sortByAscending})
        console.log("sort by:", event.target.value);
    }

    onSelectPosts () {
        this.props.selectCategory('all');
    }

    orderPosts () {
        return this.props.posts.sort((a, b) => {
            if(this.state.sortByAscending){
                return a[this.state.sortByCategory] === b[this.state.sortByCategory] ? 0 :  a[this.state.sortByCategory] < b[this.state.sortByCategory] ? -1 : 1
            }
            else{
                return a[this.state.sortByCategory] === b[this.state.sortByCategory] ? 0 :  a[this.state.sortByCategory] > b[this.state.sortByCategory] ? -1 : 1
            }
            
        })
    }

    render() {

        const posts = this.orderPosts()

        return (
            <div>
                <PageHeader>
                    Posts {this.state.sortByCategory}
                    
                    <FormGroup controlId="orderDirection" className="pull-right">
                        <FormControl componentClass="select" onChange={this.orderBy}>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </FormControl>
                    </FormGroup>

                    <ToggleButtonGroup type="radio" name="category" defaultValue="voteScore" className="pull-right" title="Sort By" key="1" id="1">
                        <ToggleButton value="voteScore" onClick={this.sortByScore}>Score</ToggleButton>
                        <ToggleButton value="timestamp" onClick={this.sortByDate}>Date</ToggleButton>
                    </ToggleButtonGroup>
                    
                </PageHeader>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h1">{this.props.selectedCategory} posts</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                    { posts.length > 0 || (<Well>There are no posts to display</Well>) }
                    {  posts && posts.map( (post) => ( 
                        <div key={post.id}>
                            <Post post={post}></Post>
                        </div>

                    ))}

                    </Panel.Body>
                </Panel>
                <CreatePostButton />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        posts: state.navigation.selectedCategory === 'all' ? state.posts.all : state.posts.all.filter((post) => post.category === state.navigation.selectedCategory),
        selectedCategory: state.navigation.selectedCategory
    }
}

const mapDispatchToProps = dispatch => ({
    selectCategory: (selectedCategory) => dispatch(selectCategoryActionCreator(selectedCategory))    
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts))
