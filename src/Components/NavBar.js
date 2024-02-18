import { useState, useEffect } from 'react';
import { Navbar, NavbarToggle, Container, Nav } from 'react-bootstrap';
import logo from '../Assets/Images/logo.jpg';
import navIcon1 from '../Assets/Images/nav-icon3.webp';
import navIcon2 from '../Assets/Images/nav-icon2.webp';
import navIcon3 from '../Assets/Images/nav-icon1.webp';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, {});

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Github" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Linkedin" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Youtube" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log(5)}>
              <span>let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;





// import { useState, useEffect } from 'react';
// import { NavbarToggle } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../Assets/Images/logo.jpg';
// import navIcon1 from '../Assets/Images/nav-icon3.webp'
// import navIcon2 from '../Assets/Images/nav-icon2.webp'
// import navIcon3 from '../Assets/Images/nav-icon1.webp'

// function NavBar() {
//     const [activeLink, setActiveLink] = useState('home');
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const onScroll = () => {
//             if (window.scrollY > 50) {
//                 setScrolled(true);
//     }else{
//         setScrolled(false);
//     }
//     }
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
// },{})
// const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
// };
//   return (
//     <Navbar expand="lg" className ={scrolled ? "scrolled" : ""}>
//       <Container>
//         <Navbar.Brand href="#home">
//             <img src={logo} alt="logo"/>
//         </Navbar.Brand>
//         <NavbarToggle aria-controls="basic-navbar-nav">
//         <span className='navbar-toggler-icon'></span>
//         </NavbarToggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink ('home')}>Home</Nav.Link>
//             <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink ('skills')}>Skills</Nav.Link>
//             <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink ('projects')}>Projects</Nav.Link>
//             {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown> */}
//           </Nav>
//           <span className='navbar-text'>
//             <div className='social-icon'>
//             <a href="#"><img src={navIcon1} alt="Github" /></a>
//             <a href="#"><img src={navIcon2} alt="Linkedin" /></a>
//             <a href="#"><img src={navIcon3} alt="Youtube" /></a>
//             </div>
//             <button className='vvd' onClick={() => console.log(5)}>
//                 <span>
//                     let's connect
//                 </span>
//             </button>
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;
