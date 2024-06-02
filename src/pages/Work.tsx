import React, { Fragment } from "react";
import { Badge, Container } from "react-bootstrap";

import experiences from "../data/experiences.json";
import PageHeader from "../components/PageHeader";

function Work() {
    return (
        <div className="work content">
            <PageHeader name="Expériences"></PageHeader>

            <section className="section-padding">
                <Container>
                    <ul className="timeline-vertical">
                        {experiences.map((experience, index) => (
                            <li
                                className={index % 2 === 0 ? " " : "inverted"}
                                key={index}>
                                <div className="timeline-item">
                                    <div className="item-header">
                                        <div className="title-time">
                                            <h3 className="title">
                                                {" "}
                                                {experience.role}{" "}
                                            </h3>

                                            <div className="time">
                                                {" "}
                                                {experience.start +
                                                    " - " +
                                                    experience.end}{" "}
                                            </div>
                                        </div>

                                        <div className="location">
                                            {" "}
                                            {experience.company +
                                                ", " +
                                                experience.location}{" "}
                                        </div>
                                    </div>

                                    {experience.description.length > 0 && (
                                        <p className="description">
                                            {" "}
                                            {experience.description}{" "}
                                        </p>
                                    )}

                                    {experience.bullets.length > 0 && (
                                        <div className="item-spacer" />
                                    )}

                                    {experience.bullets.length > 0 && (
                                        <ul
                                            className={
                                                Math.max(
                                                    ...experience.bullets.map(
                                                        (x) => x.length
                                                    )
                                                ) > 40
                                                    ? ""
                                                    : "two-column-bullets"
                                            }>
                                            {experience.bullets.map(
                                                (bullet, index) => (
                                                    <li key={index}>
                                                        {" "}
                                                        <span> ✔ </span>{" "}
                                                        {bullet
                                                            .split("\n")
                                                            .map((b, i) => {
                                                                let list =
                                                                    b.includes(
                                                                        "**"
                                                                    ) &&
                                                                    b.includes(
                                                                        "__"
                                                                    ) ? (
                                                                        b
                                                                            .split(
                                                                                "**"
                                                                            )
                                                                            .map(
                                                                                (
                                                                                    c,
                                                                                    i
                                                                                ) => {
                                                                                    return (
                                                                                        <Fragment>
                                                                                            <a
                                                                                                style={{
                                                                                                    fontWeight:
                                                                                                        "bold",
                                                                                                }}>
                                                                                                {
                                                                                                    c.split(
                                                                                                        "__"
                                                                                                    )[0]
                                                                                                }
                                                                                            </a>
                                                                                            {
                                                                                                c.split(
                                                                                                    "__"
                                                                                                )[1]
                                                                                            }
                                                                                        </Fragment>
                                                                                    );
                                                                                }
                                                                            )
                                                                    ) : (
                                                                        <Fragment>
                                                                            {b}
                                                                        </Fragment>
                                                                    );
                                                                if (
                                                                    i - 1 !=
                                                                    bullet.split(
                                                                        "\n"
                                                                    ).length
                                                                )
                                                                    return (
                                                                        <Fragment>
                                                                            {
                                                                                list
                                                                            }
                                                                            <br />
                                                                        </Fragment>
                                                                    );
                                                                else
                                                                    return list;
                                                            })}{" "}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}

                                    {experience.technologies.length > 0 && (
                                        <div className="item-spacer" />
                                    )}

                                    {experience.technologies.length > 0 &&
                                        experience.technologies.map(
                                            (technology, index) => (
                                                <Badge pill key={index}>
                                                    {" "}
                                                    {technology}{" "}
                                                </Badge>
                                            )
                                        )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>
        </div>
    );
}

export default Work;
