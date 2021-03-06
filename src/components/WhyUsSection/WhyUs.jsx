import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    background-color: ${(props) => props.theme.colors.lighterCyan};
    overflow: hidden;
    color: white;
    padding: 1.5625rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: whyus;
    }
`;

const Title = styled.h3`
    margin-bottom: 1.25rem;
`;

const DescriptionText = styled.p`
    line-height: 1.4;
    font-size: 0.875rem;
    opacity: 0.75;
`;

const WhyUs = () => {
    return (
        <Container>
            <Title>Why Us</Title>
            <DescriptionText>
                Tutorials by industry experts <br />
                Peer &amp; expert code review <br />
                Coding exercises <br />
                Access to our GitHub repos <br />
                Community forum <br />
                Flashcard decks <br />
                New videos every week
            </DescriptionText>
        </Container>
    );
};

export default WhyUs;
