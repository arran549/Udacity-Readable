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

    componentDidMount() {
        getCategories().then((res) => {
            this.setState({categories: res})
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
                            <a href="/">Readable</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav activeKey={this.props.selectedCategory} onSelect={(k) => this.onSelectCategory(k)}>
                        {this.state.categories.map((cat) => (
                            <LinkContainer key={cat.path}  to={"/" + cat.path}>
                                <NavItem eventKey={cat.name} >{cat.name}</NavItem>
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
    selectedCategory: state.navigation.selectedCategory
})

const mapDispatchToProps = dispatch => ({
    selectCategory: (selectedCategory) => dispatch(selectCategoryActionCreator(selectedCategory))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);