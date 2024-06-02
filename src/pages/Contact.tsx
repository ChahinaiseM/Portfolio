import React from "react";
import { Button, Container, Col, Form, Image, Row } from "react-bootstrap";

import "./Contact.scss";
import profile from "../data/profile.json";
import socials from "../data/socials.json";
import PageHeader from "../components/PageHeader";

function Contact() {
    return (
        <div className="contact content">
            <PageHeader name="Contact"></PageHeader>

            <section className="section-padding">
                <Container className="content-gutter text-center">
                    <Image src="./images/ProfilePicture.png" roundedCircle />

                    <div className="bubble">
                        <h3> Intéressé.e ? </h3>

                        <p className="content-gutter">
                            {" "}
                            N'hésitez pas à me contacter via mon adresse mail{" "}
                            <a href={"mailto:" + profile.email}>
                                {" "}
                                {profile.email}{" "}
                            </a>{" "}
                            ou utilisez le formulaire ci-dessous.
                        </p>
                        <h6>
                            {" "}
                            Vous pouvez aussi me trouver sur mes différents
                            réseaux{" "}
                        </h6>

                        <div className="socialLinks">
                            {socials
                                .filter((social) => social.link !== "")
                                .map((social, s_index) => (
                                    <a href={social.link} key={s_index}>
                                        <i
                                            className={
                                                "bi bi-" + social.name
                                            }></i>
                                    </a>
                                ))}

                            <a href={"mailto:" + profile.email}>
                                <i className="bi bi-envelope-fill"></i>
                            </a>
                        </div>
                    </div>

                    <form
                        action={"https://formspree.io/f/" + profile.formspreeId}
                        method="POST">
                        <h3> Contactez-moi </h3>

                        <Row>
                            <Col sm={6}>
                                <Form.Control
                                    className="mb-3"
                                    type="text"
                                    name="name"
                                    placeholder="Nom"
                                    required
                                />
                            </Col>

                            <Col sm={6}>
                                <Form.Control
                                    className="mb-3"
                                    type="text"
                                    name="subject"
                                    placeholder="Objet"
                                    required
                                />
                            </Col>

                            <Col sm={12}>
                                <Form.Control
                                    className="mb-3"
                                    type="email"
                                    name="email"
                                    placeholder="Adresse mail"
                                    required
                                />
                            </Col>

                            <Col sm={12}>
                                <Form.Control
                                    className="mb-3"
                                    as="textarea"
                                    name="message"
                                    placeholder="Votre message..."
                                    rows={3}
                                    required
                                />
                            </Col>
                        </Row>

                        <Button className="col-12" type="submit">
                            {" "}
                            Envoyer{" "}
                        </Button>
                    </form>
                </Container>
            </section>
        </div>
    );
}

export default Contact;
