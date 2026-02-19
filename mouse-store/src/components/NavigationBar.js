import { Navbar, Container, Nav } from 'react-bootstrap';

import logo from '../images/logo.png';

export default function NavigationBar() {
    return (
        <Navbar className="navbar" expand="lg" data-bs-theme="dark" fixed="top" bg="$blue-900">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="ApexMouse" src={logo}
                        width="30" height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    ApexMouse
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#bestsellers">Бестселлеры</Nav.Link>
                        <Nav.Link href="#products">Все товары</Nav.Link>
                        <Nav.Link href="#about_us">О нас</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}