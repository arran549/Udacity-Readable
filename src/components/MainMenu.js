import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { getCategories } from './../readableAPI'

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
                            <NavItem eventKey={1}>{cat.name}</NavItem>
                        ))}
                        
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default connect(null, null)(MainMenu);