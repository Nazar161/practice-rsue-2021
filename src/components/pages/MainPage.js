import React from 'react';
import ButtonsGroup from '../Buttons';
import StudentsList from '../StudentsList';
import FameOrPrLeads from '../FameOrPrLeads/FameOrPrLeads';

const MainPage = () => {
    return (
        <>
            <FameOrPrLeads/>
            <ButtonsGroup/>
            <StudentsList/>
        </>
    );
};

export default MainPage;