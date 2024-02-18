import React from 'react'
import {useState, useEffect} from 'react'
import { Container , Row , Col} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImage from '../Assets/Images/headerImage.webp'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState (0);
    const [isDeleting, setIsDeleting] = useState(true);
    const toRotate = ["Web Developer", "Web Designer","UI/Ux Designer"]
    const [text, setText] = useState ("");
    const period = 2000;
    const [delta,setDelta] = useState(300 - Math.random() * 100);
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta);
        return() =>{
            clearInterval(ticker);
        }
    },[delta]
    );

    // const tick = () => {
    //     let i = loopNum % toRotate.length;
    //     let fullText = toRotate[i];
    //     let updatedText = isDeleting ? fullText.substring(0,text.length -1) : fullText.substring(0, text.length +1);

    // setText(updatedText);

    // if (isDeleting) {
    //     setDelta(prevDelta => prevDelta/2)
    // }

    // if (!isDeleting && updatedText === fullText) {
    //     setIsDeleting(true);
    //     setDelta(period);
    // } else if ( isDeleting && updatedText === ''){
    //     setIsDeleting(false);
    //     setLoopNum(loopNum + 1);
    //     setDelta(500);
    // }
    // }

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(500);
        } else if (isDeleting || updatedText !== fullText) {
            setDelta((prevDelta) => prevDelta / 2);
        } else {
            setIsDeleting(true);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };
    

    return (
    <section>
        <Container>
            <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({isVisible}) =>
                <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                <span className='tagLine'>
                Welcome to My Profile
                </span>
                <h1>
                {`Hi I'm webcoded `}
                <span className='wrap'>
                    {text}
                </span>
                </h1>
                <p>
                lorem ipsum dolor sit amet, consectetur adip
                </p>
                <button onClick={() => console.log('connect')}>
                    let's connect
                </button>
                </div>}
                </TrackVisibility>
            </Col>
            <Col>
            <img src={headerImage} alt='header image'/>
            </Col>
            </Row>
        </Container>
    </section>
  )
}
