import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    background-color: ${(props) => props.theme.colors.cyan};
    color: white;
    padding: 1.5625rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: subscription;
    }
`;

const Title = styled.h3`
    margin-bottom: 1.25rem;
`;

const PriceTag = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.625rem;
    margin-bottom: 0.625rem;
    font-size: 2rem;
    font-weight: ${(props) => props.theme.fontWeights.bold};

    span {
        font-weight: ${(props) => props.theme.fontWeights.regular};
        font-size: 0.9375rem;
        opacity: 0.5;
    }
`;

const DescriptionText = styled.p`
    font-size: 0.9375rem;
    margin-bottom: 1.5625rem;
    opacity: 0.85;
`;

const Button = styled.button`
    color: white;
    background-color: ${(props) => props.theme.colors.brightYellow};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-family: 'Karla', sans-serif;
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0rem 0.1875rem 0.5rem;
    width: 100%;
    height: 2.8125rem;
    border-radius: 0.3125rem;
    transition: transform ease 0.2s;

    :active {
        transform: translateY(0.3125rem);
    }
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
