import React from 'react'
import { Container , Row , Col} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter from '../Assets/Images/meter1.webp'
import colorSharp from '../Assets/Images/colorSharp.jpg'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
<section id='skills' className='skills'>
    <Container>
        <Row>
            <Col>
            <div className='skill-bx'>
            <h2>

            </h2>
            <p>
        lorem ipsum dolor sit amet, consectetur adip incid id el medo whyr, sed diam nonum how euismod
            </p>
            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                <div className='item'>
                <img src={meter} alt='Image'/>
                <h5>
                    HTML
                </h5>
                </div>
                <div className='item'>
                <img src={meter} alt='Image'/>
                <h5>
                    CSS
                </h5>
                </div>
                <div className='item'>
                <img src={meter} alt='Image'/>
                <h5>
                    JAVASCRIPT
                </h5>
                </div>
                <div className='item'>
                <img src={meter} alt='Image'/>
                <h5>
                    REACT
                </h5>
                </div>
                <div className='item'>
                <img src={meter} alt='Image'/>
                <h5>
                    BOOTSTRAP
                </h5>
                </div>
            </Carousel>
            </div>
            </Col>
        </Row>
    </Container>
    <img className='background-image-left' src={colorSharp}/>
</section>
  )
}
