import { useSelector, useDispatch } from "react-redux";
import { goToStep } from "../features/form/formSlice";

const StepIndicator = () => {

    const currentStep = useSelector((state) => state.form.currentStep)
    const dispatch = useDispatch()

    const steps = [1, 2, 3, 4]

    const handleClick = (step) => {
        dispatch(goToStep(step));
    };

    return(
        <div>
            {steps.map((step) => (
                <span key={step}
                onClick={() => handleClick(step)}
                style={{ cursor: "pointer" }}
                >
                    {step === currentStep && <strong>[{step}]</strong>}
                    {step < currentStep && <span>✓{step}</span>}
                    {step > currentStep && <span>{step}</span>}

                    {step !== steps.length && " → "}
                </span>
            ))}
        </div>
    )
}

export default StepIndicator