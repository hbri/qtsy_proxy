import React, {useState} from 'react';

const Test = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
      name="email"
      value={email}
      onChange={e => setEmail(e.target.value)}/>
      <input type="password"
      name="password"
      value={password}
      onChange={e => setPassword(e.target.value)}/>
    </div>
  )

};

// to handle this better, we can extract these hooks (const email and const password) into our own custom hook which handles the state for us.
// this will be in the useForm.js file
const Test = () => {

  const [values, handleChange] = useForm({email: '', password: ''});

  return (
    <div>
      <input
      name="email"
      value={values.email}
      onChange={handleChange}/>
      <input type="password"
      name="password"
      value={values.password}
      onChange={handleChange}/>
    </div>
  )

};

export default Test;