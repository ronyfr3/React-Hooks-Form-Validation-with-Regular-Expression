//custom hooks
import { useState } from 'react';

const useForm = () => {

  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const [errors, setErrors] = useState({});

  
  return { handleChange, values,errors,setErrors };
};

export default useForm;
