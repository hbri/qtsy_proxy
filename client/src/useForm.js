import {useState} from 'react';

export const useForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
}

// can also write it like this..

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [values, e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }]

};