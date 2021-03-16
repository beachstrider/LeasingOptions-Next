import { logLabelEvent } from 'helpers/analytics';
import React from 'react';
import { useForm, FormContext } from "react-hook-form";
import { connect } from 'react-redux';
import { ProposalStepProps } from '../types/ProposalStepProps';

import BusinessDetails from './../business/business-details';



function mapStateToProps(state) {
    return {
        formData: state.formData,
        stepNumber: state.stepIndicator
    };
}

const PartnerStepTwo: React.FC<ProposalStepProps> = (props) => {

    const formData = props.formData[props.stepNumber];
    const handleGATracking = () => logLabelEvent('prop_form_tracking_partnership', 'Click', 'business-details-completed');
    
    const methods = useForm();
    const { handleSubmit} = methods;

    const onSubmit = (data) => {
        if (props.handleFormSave(props.stepNumber, data)) {
            props.handleFormStep(props.stepNumber + 1);
        }
    }

    const onBack = () => props.handleFormStep(props.stepNumber - 1);

    return (
        <div className="w-100 bg-white p-3 p-md-5">
            <FormContext {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <BusinessDetails formData={formData} includeCompanyNumber={false} />

                    <div className="form-row d-flex justify-content-end">
                        <button type="button" className="btn btn-outline-secondary mr-3" onClick={onBack}>Back</button>
                        <button type="submit" className="btn btn-primary btn-lg" onClick={() => {handleGATracking()}}>Next</button>
                    </div>
                </form>
            </FormContext>
        </div>
    )
}

export default connect(mapStateToProps)(PartnerStepTwo)