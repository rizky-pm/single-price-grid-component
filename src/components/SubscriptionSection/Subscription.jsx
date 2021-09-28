import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    background-color: ${(props) => props.theme.colors.cyan};
    color: white;
    padding: 25px;
`;

const Title = styled.h3`
    margin-bottom: 20px;
`;

const PriceTag = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 10px;
    font-size: 32px;
    font-weight: ${(props) => props.theme.fontWeights.bold};

    span {
        font-weight: ${(props) => props.theme.fontWeights.regular};
        font-size: 15px;
        opacity: 0.5;
    }
`;

const DescriptionText = styled.p`
    font-size: 15px;
    margin-bottom: 25px;
    opacity: 0.85;
`;

const Button = styled.button`
    color: white;
    background-color: ${(props) => props.theme.colors.brightYellow};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-family: 'Karla', sans-serif;
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 100%;
    height: 45px;
    border-radius: 5px;
`;

const Subscription = () => {
    return (
        <Container>
            <Title>Monthly Subscription</Title>
            <PriceTag>
                $29 <span>per month</span>
            </PriceTag>
            <DescriptionText>
                Full access for less than $1 a day
            </DescriptionText>
            <Button>Sign Up</Button>
        </Container>
    );
};

export default Subscription;
