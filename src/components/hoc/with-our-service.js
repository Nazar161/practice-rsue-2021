import React from 'react';
import OurServiceContext from '../our-service-context';

const WithOurService = () => (Wrapped) => {
    return (props) => {
        return (
            <OurServiceContext.Consumer>
                {
                    (OurService) => {
                        return <Wrapped {...props} OurService={OurService}/>
                    }    
                }
            </OurServiceContext.Consumer>
        )
    }
};

export default WithOurService;