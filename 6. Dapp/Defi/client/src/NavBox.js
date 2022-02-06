import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

class NavBox extends Component {

	constructor (props){
		super(props);
		this.state=props.state;

		this.enumContent = [
			"RegisteringVoters",
			"ProposalsRegistrationStarted",
			"ProposalsRegistrationEnded",
			"VotingSessionStarted",
			"VotingSessionEnded",
			"VotesTallied"
		];
	}

    render() {
        return ( 
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">Voting System</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							{this.enumContent.map((a) => <Nav.Link>{a}</Nav.Link>)}
							<Navbar.Text>
								<span className="navConnected">Connected with : {this.state.accounts[0]}</span>
							</Navbar.Text>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
    }
}

export default NavBox;