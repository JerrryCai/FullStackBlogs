import { useState } from 'react';
/**
 * customer hooks for dealing with form inputs
 * @param {*} initialValues
 * @return {[values, handleChange]}
 */
export function useFormInput(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return [values, handleChange];
}
