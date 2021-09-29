import React from 'react';
import styled from 'styled-components';

import Join from './components/JoinSection/Join';
import Subscription from './components/SubscriptionSection/Subscription';
import WhyUs from './components/WhyUsSection/WhyUs';
import Attribute from './components/Atrribute/Attribute';

const AppContainer = styled.main`
    display: grid;
    overflow: hidden;
    grid-template-rows: 16.875rem 14.375rem 14.375rem;
    width: 19.375rem;
    margin: 3.75rem 2.1875rem;
    border-radius: 0.625rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-template-areas:
            'join join'
            'subscription whyus';
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        width: 37.5rem;
        height: 28.4375rem;
        margin: 0;
        border-radius: 0.3125rem;
    }
`;

function App() {
    return (
        <AppContainer>
            <Join />
            <Subscription />
            <WhyUs />
            <Attribute />
        </AppContainer>
    );
}

export default App;
