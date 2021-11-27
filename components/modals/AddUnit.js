import React,{useState} from 'react';
import styles from "../../styles/AddUnit.module.scss"
import Form from '../form/Form';

function AddUnit({ShowModal, setShowModal ,setShowModalMessage}) {
    const [formValues, setformValues] = useState({
        unit:"",
        price:"",
    })
    const FormInputs = [
        {
          id: 1,
          name: "unit",
          type: "text",
        //   placeholder: "unit",
          errorMessage:
            "Unit field must be at least 3 characters",
          label: "Unit",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
            id: 2,
            name: "price",
            type: "text",
            // placeholder: "price",
            errorMessage:
              "Price field cannot be empty and should contain only numbers",
            label: "Price",
            pattern: "[+-]?([0-9]*[.])?[0-9]+",
            required: true,
          }
       
      ];
    const showSuccesMessage= () => {
        setShowModalMessage(true)
        
        setTimeout(
           function(){ setShowModalMessage(false)}
        , 3000);
    }
    const handleSubmit =(e) =>{
        e.preventDefault()
        setShowModal(!ShowModal)
        showSuccesMessage()
        setformValues({ ...formValues, unit:"",price:""});
    }
    const onChange = (e) => {
        setformValues({ ...formValues, [e.target.name]: e.target.value });
        console.log(formValues)
    };
    return (
        <>
        {ShowModal ? 
            <div className={styles.AddUnit_container} onClick={()=> setShowModal(!ShowModal)}>
            <div className={styles.AddUnit_Wrapper} onClick={e => {e.stopPropagation();}} >
                <div className={styles.Title_Wrapper} >
                    <h2 >Add unit</h2>
                    <div>
                        <h3 onClick={()=> setShowModal(!ShowModal)}>X</h3>
                    </div>
                </div>
                <div className={styles.AddUnit}> 
                    
                    <Form handleSubmit={handleSubmit} onChange={onChange} 
                    formValues={formValues} setformValues={setformValues} FormInputs={FormInputs}/>

                </div>
                
            </div> 
            </div>
        : null}
        </>  
    )
}

export default AddUnit
