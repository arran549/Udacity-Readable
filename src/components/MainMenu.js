import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { selectCategoryActionCreator } from '../actions/navigation.actions'
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter} from 'react-router-dom'

class MainMenu extends Component {
    state = { 
        categories: []
     }



    onSelectCategory(selectedCategory) {
        this.props.selectCategory(selectedCategory);
    }

    render() {

        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Readable</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <LinkContainer to={"/posts"} active={this.props.selectedCategory === 'all'} onClick={() => this.onSelectCategory('all')}>
                                <NavItem>all</NavItem>
                        </LinkContainer>
                        {this.props.categories.map((cat) => (
                            <LinkContainer key={cat.path}  to={"/" + cat.path} active={this.props.selectedCategory === cat.path} onClick={() => this.onSelectCategory(cat.path)}>
                                <NavItem>{cat.name}</NavItem>
                            </LinkContainer>
                        ))}
                    </Nav>
                </Navbar>
            </div>
            
        );
    }
}

const mapStateToProps = (state, props) => ({
    allPosts: state.posts.all || [],
    selectedCategory: state.navigation.selectedCategory,
    categories: state.navigation.categories
})

const mapDispatchToProps = dispatch => ({
    selectCategory: (selectedCategory) => dispatch(selectCategoryActionCreator(selectedCategory))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainMenu));