import { useSelector, useDispatch } from "react-redux";
import { prevStep, nextStep, updateField } from "../features/form/formSlice";

const AddressInfo = () => {

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

            <h2>Address Information</h2>

            <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            />

            <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            />

            <input
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            />

            <input
            name="zip"
            placeholder="Zip Code"
            value={formData.zip}
            onChange={handleChange}
            />

            <button onClick={() => dispatch(prevStep())}>Back</button>
            <button onClick={() => dispatch(nextStep())}>Next</button>

        </div>
    )
}

export default AddressInfo