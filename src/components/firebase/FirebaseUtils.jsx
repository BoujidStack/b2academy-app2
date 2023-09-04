import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseApp from './FirebaseConfig';



const saveFormDataToFirestore = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, "formSubmissions");
    await addDoc(formDataRef, formData);
    console.log("Form data saved successfully!");
  } catch (error) {
    console.error("Error saving form data:", error);
  }
};



const saveFormDataToOtherForm = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, 'formSubmissionsBusinesses');
    await addDoc(formDataRef, formData);
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};


const saveFormDataToOtherFormPrograms = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, 'formSubmissionsPrograms');
    await addDoc(formDataRef, formData);
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};


const saveFormDataToOtherFormEmails = async (formData) => {
  try {
    const db = getFirestore(firebaseApp);
    const formDataRef = collection(db, 'formSubmissionsEmails');
    await addDoc(formDataRef, formData);
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};


export { saveFormDataToFirestore, saveFormDataToOtherForm, saveFormDataToOtherFormPrograms, saveFormDataToOtherFormEmails };
