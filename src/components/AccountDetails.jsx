import { useSelector, useDispatch } from "react-redux";
import { prevStep, nextStep, updateField } from "../features/form/formSlice";

const AccountDetails = () => {

    const formData = useSelector((state) => state.form.formData)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(updateField({
            name: e.target.name,
            value: e.target.value
        }))
    }

    return(
        <div>

            <h2>Account Details</h2>

            <input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            />

            <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            />

            <button onClick={() => dispatch(prevStep())}>Back</button>
            <button onClick={() => dispatch(nextStep())}>Next</button>

        </div>
    )
}

export default AccountDetails