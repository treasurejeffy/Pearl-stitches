import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,  Row, Col, Button, Form} from "react-bootstrap";
import { ArrowBarDown, ArrowDown, Download, Facebook, Instagram, Linkedin, Quote, Star, StarFill, Stars, Tiktok, TwitterX, Whatsapp, X } from "react-bootstrap-icons";
import Logo from '../../assets/pearl.png';
import CEO from '../../assets/team.png';
import '../footer/footer.css'

export default function Footer() {
    return(
        <section className="my-footer">
            <Container>
                <Row  className="justify-content-center py-5">
                    <Col className="col-lg-4 col-12 d-flex align-items-center justify-content-center ">
                        <img src={Logo} alt="Logo" className="Logos"/>
                    </Col>
                    <Row className="col-lg-8 col-12" >
                        <Col className="col-lg-4 col-md-6 col-12 mt-4">
                        <h4 className="fs-5 text-center link-heading">Links</h4>
                            <div className="d-flex justify-content-center">
                                <ul  className="ms-2 mt-3 link-list">
                                    <li>Home</li>
                                    <li>About</li>                                
                                    <li>Contact</li>
                                    <li>Service</li>                            
                                    <li>Shop</li>                                
                                    <li>Learn</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="text-center  col-md-6  col-lg-4 col-12 mt-4">
                            <h4 className="fs-5 social-media-heading">Social Media</h4>
                            <div className="d-flex justify-content-center">
                                <ul className="ms-5 mt-3 social-media-list">
                                    <li className="d-flex"> <Instagram className="fs-4 me-2"/> Instagram</li>
                                    <li className="d-flex "> <Facebook className="fs-4  me-2"/> Facebook</li>
                                    <li className="d-flex"> <Linkedin className="fs-4  me-2"/> LinkedIn</li>
                                    <li className="d-flex"> <TwitterX className="fs-4  me-2"/> Twitter</li>
                                    <li className="d-flex"> <Tiktok className="fs-4  me-2"/> Tiktok</li>
                                    <li className="d-flex"> <Whatsapp className="fs-4  me-2"/>090 1006 5284</li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="col-lg-4 col-12 d-flex align-items-center justify-content-center">
                            <img src={CEO} alt="CEO" className="footer-img mt-4"/>
                            <span className="fs-4 img-span">CEO</span>
                        </Col>
                        <Col className="text-end fs-6 fw-bold text-danger pt-4 motto"> <p> Motto: Design Moderatly!</p></Col>
                    </Row>
                </Row>
            </Container>
        </section>
    )
    
}