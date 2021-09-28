import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    background-color: white;
    padding: 25px;
`;

const Title = styled.h3`
    margin-bottom: 25px;
`;

const SubTitle = styled.p`
    color: ${(props) => props.theme.colors.brightYellow};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    margin-bottom: 20px;
`;

const DescriptionText = styled.p`
    font-size: 13px;
    line-height: 2.25;
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
