import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import banner from "../assets/bannerone.png"
import card from "../assets/Group 3.png"
import startlogo from "../assets/startup.png"
const Startup = () => {
  return (
    <div>
        <section>
            <Container>
                <div>
                <Row>
                   <Col lg={7}>
                     <img style={{paddingTop:"191px", paddingBottom:"35px",width:'1'}} src={startlogo} alt="" />
                   <h1 style={{paddingBottom:'32px',fontWeight:'500',fontSize:'36',width:'456'}}>Empowering startups to fuel<br/> their business growth</h1>
                     <p style={{paddingBottom:'37px',fontWeight:'400',fontSize:'18',}}>Eu posuere mi sed purus proin quisque molestie. Ut amet,at amet,<br/>
 velit<br/>
nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                    <button style={{background:'#EA580C',color:'#ffffff',padding:'9px 23px 9px 33px',fontWeight:'400',fontSize:'16px'}}>Get started now</button>
                   </Col>


                   <Col lg={5}>
                   <img style={{paddingLeft:'17px',paddingTop:'94px'}} src={banner} alt="" />
                   </Col>
                </Row>
                </div>
                <div style={{paddingTop:'109px'}}>
                    <Row>
                        <Col lg={4}><img src={card} alt="" /></Col>
                        <Col lg={4}><img src={card} alt="" /></Col>
                        <Col lg={4}><img src={card} alt="" /></Col>
                          
                    </Row>
                </div>
            </Container>
        </section>
    </div>
  )
}

export default Startup