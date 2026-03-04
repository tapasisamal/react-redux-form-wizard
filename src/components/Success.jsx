import { resetForm } from "../features/form/formSlice";
import { useDispatch } from "react-redux";

const Sucess = () => {

    const dispatch = useDispatch()

    return(
        <div>

            <h2>Form Submitted Successfully 🎉</h2>

            <button onClick={() => dispatch(resetForm())}>Fill Again</button>

        </div>
    )
}

export default Sucess