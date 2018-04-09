import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { getCategories } from './../readableAPI'
import { selectCategoryActionCreator } from '../actions/navigation.actions'

class MainMenu extends Component {
    state = { 
        categories: []
     }

    componentDidMount() {
        getCategories().then((res) => {
            this.setState({categories: res})
            //this.state.categories = res;
        })
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
                            <a href="#">Readable</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        {this.state.categories.map((cat) => (
                            <NavItem key={cat.path} eventKey={1} href={"/" + cat.path} >{cat.name}</NavItem>
                        ))}
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    allPosts: state.posts.all || [],
    selectedCategory: state.navigation.selectedCategory
})

const mapDispatchToProps = dispatch => ({
    selectCategory: (selectedCategory) => dispatch(selectCategoryActionCreator(selectedCategory))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);