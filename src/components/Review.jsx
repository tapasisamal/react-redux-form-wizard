import { useSelector, useDispatch } from "react-redux";
import { prevStep, submitForm } from "../features/form/formSlice";

const Review = () => {

    const formData = useSelector((state) => state.form.formData)
    const dispatch = useDispatch()

    const requiredFields = ["firstName", "email", "address", "city" ,"state" , "username" , "password"];

    const isFormValid = requiredFields.every((field) => formData[field].trim() !== "");

    return(        
        <div>

            <h2>Review Information</h2>

            <pre>{JSON.stringify(formData, null, 2)}</pre>

            <button onClick={() => dispatch(prevStep())}>Back</button>

            <button 
            onClick={() => dispatch(submitForm())}
            disabled={!isFormValid}
            >
                Submit
            </button>

        </div>
    )
}

export default Review