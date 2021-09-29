import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    background-color: white;
    padding: 1.5625rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: join;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        padding: 2.40625rem;
    }
`;

const Title = styled.h3`
    margin-bottom: 1.5625rem;
`;

const SubTitle = styled.p`
    color: ${(props) => props.theme.colors.brightYellow};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    margin-bottom: 0.9375rem;
`;

const DescriptionText = styled.p`
    font-size: 0.8125rem;
    line-height: 1.75;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        font-size: 0.9375rem;
        align-self: flex-end;
    }
`;

const Join = () => {
    return (
        <Container>
            <Title>Join our community</Title>
            <SubTitle>30-day, hassle-free money back guarantee</SubTitle>
            <DescriptionText>
                Gain access to our full library of tutorials along with expert
                code reviews. Perfect for any developers who are serious about
                honing their skills.
            </DescriptionText>
        </Container>
    );
};

export default Join;
