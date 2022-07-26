import { useState } from "react";
import Information from './PersonalInformation'
import OfficeDetails from './OfficeDetails'
import Specialization from './Specialization'

function ProviderRegistration() {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    npi: "",
    designation: "",
    lastName: "",
    middleName: "",
    firstName: "",
    birthday: new Date(),
    gender: "",
    taxonomy: "",
    classification: "",
    specialization: "",
    practiceName: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    city: "",
    zip: "",
    office: "",
    fax: "",
    cell: "",
    email: ""
  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  const sendBirthDay = (value) => {
    formData.birthday = value
  };

  const sendGenderValue = (value) => {
    formData.gender = value
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
    console.log(formData)
  }


// javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1: return <Information nextStep={nextStep} sendBirthDay={sendBirthDay} sendGenderValue={sendGenderValue} handleFormData={handleInputData} values={formData}/>;
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2: return <Specialization nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}/>;
      // Only formData is passed as prop to show the final value at form submit
    case 3: return <OfficeDetails nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />;
      
    // default case to show nothing
    default:
      return (
        <div className="App">
        </div>
      );
  }
}

export default ProviderRegistration;
