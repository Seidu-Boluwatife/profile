import React, { useState } from 'react'

const FirstForm = () => {
    //stores current form state and changes step
    const[step,setStep] =useState(1);
    //stores selected data
    const[formData,setFormData] = useState({
        "Category":"",
        "subCatergory":"",
        "feedback":"",

    });
    //next step
    const nextstep =()=> setStep(step -1);
    //Prev Step
    const prevStep =() =>setStep(step-1);

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log("Form submitted",formData);
        alert(`Thanks ${formData.name},your favorite color is ${formData.color} `)//shows pop up message 


    };
    return(
       <form>
        
       </form>
    )



  return (
    <div>
        User Details
    </div>
  )
}

export default FirstForm