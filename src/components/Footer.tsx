import React from "react";
import { Container, Row } from "react-bootstrap";

import "./Footer.scss";

function Footer() {
    return (
        <footer>
            <Container>
                <Row className="text-center">
                    <p>
                        © {new Date().getFullYear()} -{" "}
                        <a href="https://www.linkedin.com/in/chahinaise-mesbahi-6ab923278/">
                            MESBAHI Chahinaise
                        </a>
                    </p>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
