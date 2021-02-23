import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './Button'

const App = () => {
  return (
  <div>
    <Navbar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
    <CoolButton />
  </div>
  )
};

export default App;

