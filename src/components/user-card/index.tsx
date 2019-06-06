import faker from "faker";
import React from "react";
import styled from "styled-components";
import { Avatar } from "../avatar";
import { Button } from "../button";

export type UserCardProps = any;

const StyledUserCard = styled.div<UserCardProps>`
    height: 300px;
    border: 1px solid #ccc;
`;

const UserCardHeader = styled.div`
    background: #eee;
    height: 100px;
    border-bottom: 1px solid #ccc;
    margin: 0 auto;
`;

const UserCardSection = styled.div`
    background: #eee;
    margin: 10px 0;
`;

const UserCardSkills = styled.ul`
    background: #eee;
    margin: 10px 0;
    list-style: none;
`;

const UserCardSkill = styled.li`
    background: #eee;
    height: 100px;
    border-bottom: 1px solid #ccc;
`;

export const UserCard = () => {
    const name = faker.name.findName();
    const image = faker.image.avatar();

    return (
        <StyledUserCard>
            <UserCardHeader>
                <Avatar src={image} />
            </UserCardHeader>

            <UserCardSection>
                <h1>{name}</h1>
            </UserCardSection>

            <UserCardSection>
                <h2>Top Skills</h2>

                <UserCardSkills>
                    <UserCardSkill>
                        <h3>Java</h3>
                    </UserCardSkill>
                    <UserCardSkill>
                        <h3>C#</h3>
                    </UserCardSkill>
                    <UserCardSkill>
                        <h3>SQL</h3>
                    </UserCardSkill>
                </UserCardSkills>
            </UserCardSection>

            <UserCardSection>
                <h2>Top Skills</h2>
            </UserCardSection>

            <Button primary>Primary</Button>
        </StyledUserCard>
    );
};
