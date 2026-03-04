import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    username: "",
    password: ""
  },
  isSubmitted: false
};

const formSlice = createSlice({
    name: "form",
    initialState,

    reducers:{
        nextStep: (state) => {
            if(state.currentStep < 4){
                state.currentStep += 1
            }
        },

        prevStep: (state) => {
            if(state.currentStep > 1){
                state.currentStep -= 1
            }
        },

        goToStep: (state, action) => {
            state.currentStep = action.payload;
        },

        updateField: (state, action) => {
            const {name, value} = action.payload;
            state.formData[name] = value
        },

        submitForm: (state) => {
            state.isSubmitted = true
        }, 

        resetForm: () => initialState
        
    }
})

export const {nextStep, prevStep, goToStep, updateField, submitForm, resetForm} = formSlice.actions
export default formSlice.reducer