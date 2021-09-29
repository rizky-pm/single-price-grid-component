import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    color: ${(props) => props.theme.colors.cyan};
    margin-top: 0.625rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(-100%, -50%);
    }
`;

const Attribution = styled.p`
    text-align: center;
`;

const AttributionLink = styled.a`
    color: inherit;
    transition: all ease 0.2s;

    :hover {
        color: ${(props) => props.theme.colors.brightYellow};
        text-decoration: none;
    }
`;

const Attribute = () => {
    return (
        <Container>
            <Attribution>
                Challenge by{' '}
                <AttributionLink
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Frontend Mentor
                </AttributionLink>
                . Coded by{' '}
                <AttributionLink href='https://github.com/rizky-pm'>
                    Rizky Putra Mahendra
                </AttributionLink>
                .
            </Attribution>
        </Container>
    );
};

export default Attribute;
