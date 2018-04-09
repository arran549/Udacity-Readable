import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { getCategories } from './../readableAPI'
import { selectCategoryActionCreator } from '../actions/navigation.actions'
import { LinkContainer } from 'react-router-bootstrap';

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

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);