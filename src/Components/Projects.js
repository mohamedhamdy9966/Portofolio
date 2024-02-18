import React from 'react'
import { Container ,Col ,Row ,Tab ,Nav} from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../Assets/Images/colorSharp.jpg'
import projImg1 from '../Assets/Images/project1.jpg'
import projImg2 from '../Assets/Images/project1.jpg'
import projImg3 from '../Assets/Images/project1.jpg'
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils'
import 'animate.css';



export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]
  return (
    <section>
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                {({isVisible}) =>
                <div className={isVisible ? "animate_animated animate_slideInUp" : ""}>
                <h2>
                    Projects
                </h2>
                <p>
                    lorem ipsum dolor sit amet, consectetur adip
                </p>
                </div>}
                </TrackVisibility>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                    <Nav.Item>
                        <Nav.Link eventKey="first">
                        Tab One
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">
                        Tab Two
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">
                        Tab Three
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project, index) =>{
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                    />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">lorem Ipsum</Tab.Pane>
                    <Tab.Pane eventKey="third">lorem Ipsum</Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}/>
    </section>
  )
}
