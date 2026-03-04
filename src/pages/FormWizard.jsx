import { useSelector } from "react-redux";
import PersonalInfo from "../components/PersonalInfo";
import AddressInfo from "../components/AddressInfo";
import AccountDetails from "../components/AccountDetails";
import Review from "../components/Review";
import Success from "../components/Success"
import StepIndicator from "../components/StepIndicator";

const FormWizard = () => {

    const {currentStep, isSubmitted} = useSelector((state) => state.form)

    if(isSubmitted){
        return <Success />
    }

    return(
        <div>
            <h1>Multi Step Form</h1>

            <StepIndicator />
            
            {currentStep === 1 && <PersonalInfo />}
            {currentStep === 2 && <AddressInfo />}
            {currentStep === 3 && <AccountDetails />}
            {currentStep === 4 && <Review />}

        </div>
    )
}

export default FormWizard