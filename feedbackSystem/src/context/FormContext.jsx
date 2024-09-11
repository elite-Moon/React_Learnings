import { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [forms, setForms] = useState([]);

  const addForm = (newForm) => {
    setForms([...forms, newForm]);
  };

  const updateForm = (id, updatedForm) => {
    setForms(forms.map((form) => (form.id === id ? updatedForm : form)));
  };

  const deleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  return (
    <FormContext.Provider value={{ forms, addForm, updateForm, deleteForm }}>
      {children}
    </FormContext.Provider>
  );
};
