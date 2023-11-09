import React from 'react';
import { useFormik } from 'formik';


function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      alert("Login Successful");
    },
    validate: values =>{
      let errors = {};
      if(!values.name) errors.name = 'Field Required';
      if(!values.email) errors.email = 'Username should be an email';
      if(!values.password) errors.password = 'Field Required';
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name:</div>
        <input 
        type="text" 
        name="name" 
        onChange={formik.handleChange} 
        value={formik.values.name}/>
        {formik.errors.name ? 
        <div style={{color:'red'}}>{formik.errors.name}</div> : null}
       
       <div>Email:</div>
        <input 
        type="text" 
        id="emailField"
        name="email" 
        onChange={formik.handleChange} 
        value={formik.values.email}/>
        {formik.errors.email ? 
        <div id='emailError' style={{color:'red'}}>{formik.errors.email}</div> : null}        
       
        <div>Password:</div>
        <input 
        type="text" 
        id="pswField"
        name="password" 
        onChange={formik.handleChange} 
        value={formik.values.password}/><br/>
        {formik.errors.password ? 
        <div id='pswError' style={{color:'red'}}>{formik.errors.password}</div> : null}                
        
        <button id='submitBtn' type="submit">Submit</button>
      </form>      
    </div>
  );
}

export default App;
