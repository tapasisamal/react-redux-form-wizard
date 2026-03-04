import { useDispatch, useSelector } from "react-redux";
import { nextStep, updateField } from "../features/form/formSlice";

const PersonalInfo = () => {

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

            <h2>Personal Information</h2>

            <input
            type="text"
            name= "firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}            
            />

            <input
            type="text"
            name= "lastName"
            placeholder="Last Name"
            value={formData.lasttName}
            onChange={handleChange}            
            />

            <input
            type="number"
            name= "phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}            
            />


            <input
            type="email"
            name= "email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}            
            />

            <button onClick={() => dispatch(nextStep())}>Next</button>

        </div>
    )
}

export default PersonalInfo