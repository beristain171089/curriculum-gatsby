import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Social from './Social';
import profileImage from '../../images/luis.jpg';
import './Profile.scss';

const data = [
    {
        title: "Edad:",
        info: "31 años"
    },
    {
        title: "Dirección:",
        info: "Cancún, Q. Roo, México 77518"
    },
    {
        title: "E-Mail:",
        info: "luis.javier.jimenez.beristain@outlook.com"
    },
    {
        title: "Teléfono:",
        info: "+52 998 315 01 15"
    }
]

export default function Profile() {
    return (
        <div className="profile">
            <div className="wallpaper" />
            <div className="dark" />
            <Container className="box">
                <Row className="info">
                    <Col xs={12} md={4}>
                        <Image src={profileImage} fluid />
                    </Col>
                    <Col xs={12} md={8} className="info__data">
                        <span>¡HOLA!</span>
                        <p>Luis Javier Jimenez B.</p>
                        <p>Analista Programador</p>
                        <hr />
                        <div className="more-info">
                            {/*  <div className="item">
                                <p>Teléfono:</p>
                                <p>+52 998 315 01 15</p>
                            </div> */}
                            {data.map((item, index) => (
                                <div key={index} className="item">
                                    <p>{item.title}</p>
                                    <p>{item.info}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Social />
            </Container>
        </div>
    )
}
