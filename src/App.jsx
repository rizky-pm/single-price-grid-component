import React from 'react';
import styled from 'styled-components';

import Join from './components/JoinSection/Join';
import Subscription from './components/SubscriptionSection/Subscription';
import WhyUs from './components/WhyUsSection/WhyUs';

const AppContainer = styled.main`
    display: grid;
    grid-template-rows: 270px 230px 230px;
    width: 310px;
    height: 720px;
    margin: 60px 35px;
    border-radius: 10px;
`;

function App() {
    return (
        <AppContainer>
            <Join />
            <Subscription />
            <WhyUs />
        </AppContainer>
    );
}

export default App;
