import { Navbar, Container, Nav } from 'react-bootstrap'

const MyNav = () => {
    return (
        <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#221f1f' }}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src="/src/assets/img/logo.png" alt="Logo" style={{ width: '100px', height: '55px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" className="fw-bold">Home</Nav.Link>
                        <Nav.Link href="#" className="fw-bold">TV Shows</Nav.Link>
                        <Nav.Link href="#" className="fw-bold">Movies</Nav.Link>
                        <Nav.Link href="#" className="fw-bold">Recently Added</Nav.Link>
                        <Nav.Link href="#" className="fw-bold">My List</Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-search icons" style={{ marginLeft: '0.8em', marginRight: '0.8em', fontSize: '1.2em', color: '#f5f5f1' }}></i>
                        <div id="kids" className="fw-bold" style={{ color: '#f5f5f1', fontSize: '0.8em' }}>KIDS</div>
                        <i className="bi bi-bell icons" style={{ marginLeft: '0.8em', marginRight: '0.8em', fontSize: '1.2em', color: '#f5f5f1' }}></i>
                        <i className="bi bi-person-circle icons" style={{ marginLeft: '0.8em', marginRight: '0.8em', fontSize: '1.2em', color: '#f5f5f1' }}></i>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNav