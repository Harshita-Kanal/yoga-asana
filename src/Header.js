import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, NavLink
} from 'reactstrap';
import { Collapse } from 'reactstrap';
import './Header.css';
// import firebase, { auth, provider } from '../firebase.js'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,


        };

        this.toggleNav = this.toggleNav.bind(this);


    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }



    render() {
        return (
            <div>
                <React.Fragment>
                    <Navbar dark color="#d81b60" expand="md" className="mynavbar" >

                     
                            <NavbarBrand className="ml-1" href="/"><div> </div>Yogasana<span></span> </NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />

                            <Collapse isOpen={this.state.isNavOpen} navbar >
                                <Nav navbar className="myyitem">
                                    <NavItem active >
                                        <NavLink href="/About">
                                            <span className="fa fa-home fa-lg"></span> About </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="/Practise"><span className="fa fa-list fa-lg"></span> Practise </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="/Discuss"><span className="fa fa-list fa-lg"></span> Discuss </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="/Leaderboard"><span className="fa fa-list fa-lg"></span> Leaderboard </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="/yoga"><span className="fa fa-list fa-lg"></span> Learn </NavLink>
                                    </NavItem>
                                   
                                </Nav>
                                <Nav className="ml-auto" navbar>
                                {
                                    this.props.user ?
                                    <NavItem active>
                                        <NavLink href="/Profile"><span className="fa fa-list fa-lg"></span> Profile </NavLink>
                                    </NavItem>
                                    :
                                    <NavItem></NavItem>
                                 }
                                    <NavItem active>
                                        {/* <NavLink href="/"><span className="fa fa-list fa-lg"></span> Logout </NavLink> */}
                          
                                        {
                                            this.props.user ?

                                            <button className = "btn btn-outline-warning" onClick =  {this.props.logout} > Logout </button>
                                            :
                                            <button  className = "btn btn-outline-warning" onClick =  {this.props.login} > Login with Google</button>

                                        }      
                                    </NavItem>
                                </Nav>
                                {/* <Nav className="ml-auto" navbar>
                                    
                                </Nav> */}
                            </Collapse>
                   
                    </Navbar>
                </React.Fragment>
             </div>
        )
    }
}


export default Header;