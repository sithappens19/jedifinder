import Chance from "chance";
import faker from "faker";
import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { Avatar } from "../avatar";

const chance = new Chance();

export type UserCardProps = any;

const StyledUserCard = styled.div<UserCardProps>`
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const UserCardBody = styled.div`
    padding: 15px 15px 0 15px;
`;

const UserCardHeader = styled.div`
    position: relative;
    background: #eee;
    height: 180px;
    padding: 15px;
    border-bottom: 1px solid #ccc;
    text-align: center;

    img {
        margin: 0 auto;
    }
`;

const UserCardSection = styled.div`
    margin: 10px 0;
    padding-top: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;

    &:last-child {
        border-bottom: 0;
        padding-bottom: 0;
    }

    h2,
    h3 {
        color: #502979;
    }

    h2 {
        margin: -15px 0 3px 0;
    }

    h3 {
        margin: 0;
    }

    h4 {
        color: #333;
        margin: 0 0 5px 0;
    }
`;

const UserCardSkills = styled.ul`
    margin: 10px 0 0 0;
    padding: 0;
    list-style: none;
`;

const UserCardSkill = styled.li`
    font-size: 12px;
    margin: 0;

    display: grid;
    grid-template-columns: auto 70px;

    h3 {
        margin: 3px 0;
        color: #333;
    }

    div {
        margin-top: 3px;
    }
`;

const Rating = styled.div`
    width: 70px;
    height: 12px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 3px;
`;

const RatingEmpty = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 12px;
    border: 1px solid #ccc;
`;

const RatingChecked = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 12px;
    border: 1px solid #ccc;
    background: #502979;
`;

export const UserCard = () => {
    const name = chance.pickone([
        "Hans Solo",
        "Jar Jar Binks",
        "Darth Maul",
        "Darth Vadar",
        "Darth Sidius",
        "Kylo Ren",
        "Boba Fett",
        "Jango Fett",
        "Princess Leia",
        "Yoda",
        "Luke Skywalker",
        "General Grevus",
        "Ben Kenobi",
        "Aunt May",
        "Uncle Ben",
        "Tuscan Raider",
        "Count Dooku",
        "Storm Trooper",
        "R2D2",
        "BB8",
        "C3PO"
    ]);
    const image = faker.image.avatar();
    const position = chance.pickone([
        "Software Engineer",
        "DevOps Engineer",
        "Data Scientist",
        "Database Admin",
        "Project Manager",
        "Business Analyst"
    ]);
    const skills = chance.pickset(
        [
            "C#",
            "Node.JS",
            "MySQL",
            "MongoDB",
            "Oracle",
            "AWS",
            "Google Cloud",
            "Ansible",
            "Terraform",
            "Photoshop",
            "Sketch",
            "Agile",
            "Prototyping"
        ],
        2
    );
    const project = chance.pickone([
        "IAG",
        "CIS",
        "VMER",
        "PDCS",
        "Frames",
        "CMG",
        "DFCNI",
        "DRS"
    ]);
    const location = chance.pickone([
        "Newcastle",
        "Manchester",
        "London",
        "Leeds",
        "Blackpool",
        "Sheffield"
    ]);

    const javaRating = chance.integer({ min: 3, max: 5 });
    const skill2Rating = chance.integer({ min: 4, max: 5 });
    const skill3Rating = chance.integer({ min: 3, max: 5 });

    return (
        <StyledUserCard>
            <UserCardHeader>
                <FaStar
                    style={{
                        position: "absolute",
                        height: "32px",
                        width: "32px",
                        top: "10px",
                        right: "10px",
                        color: "#888"
                    }}
                />
                <Avatar src={image} />
            </UserCardHeader>

            <UserCardBody>
                <UserCardSection>
                    <h2>{name}</h2>
                    <h4>
                        {position} | {location}
                    </h4>
                </UserCardSection>

                <UserCardSection>
                    <h3>Top Skills</h3>

                    <UserCardSkills>
                        <UserCardSkill>
                            <h3>Java</h3>

                            <Rating>
                                {new Array(javaRating).fill(0).map(i => (
                                    <RatingChecked />
                                ))}
                                {new Array(5 - javaRating).fill(0).map(i => (
                                    <RatingEmpty />
                                ))}
                            </Rating>
                        </UserCardSkill>
                        <UserCardSkill>
                            <h3>{skills[0]}</h3>

                            <Rating>
                                {new Array(skill2Rating).fill(0).map(i => (
                                    <RatingChecked />
                                ))}
                                {new Array(5 - skill2Rating).fill(0).map(i => (
                                    <RatingEmpty />
                                ))}
                            </Rating>
                        </UserCardSkill>
                        <UserCardSkill>
                            <h3>{skills[1]}</h3>

                            <Rating>
                                {new Array(skill3Rating).fill(0).map(i => (
                                    <RatingChecked />
                                ))}
                                {new Array(5 - skill3Rating).fill(0).map(i => (
                                    <RatingEmpty />
                                ))}
                            </Rating>
                        </UserCardSkill>
                    </UserCardSkills>
                </UserCardSection>

                <UserCardSection>
                    <h3>Project</h3>

                    <UserCardSkills>
                        <UserCardSkill>
                            <h3>{project}</h3>
                        </UserCardSkill>
                    </UserCardSkills>
                </UserCardSection>
            </UserCardBody>
        </StyledUserCard>
    );
};
