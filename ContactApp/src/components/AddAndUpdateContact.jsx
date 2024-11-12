import React from 'react'
import Modal from './Modal'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import {db} from "../config/firebase"
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import * as Yup from "yup"

const contactSchemaValidation = Yup.object().shape({
  Name: Yup.string().required("Name is Required"),
  Email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddAndUpdateContact = ({isOpen,toggleOpen,isUpdate,contact}) => {

  const addContact = async (contact)=>{
     try {
        const contactRef = collection(db,"contacts");
        await addDoc(contactRef,contact );
        toast.success("Contact Added Succesfully !")
      } catch (error) {
        console.log(error);
      }
      toggleOpen();
  };

  const updateContact = async (contact,id)=>{
    try {
       const contactRef = doc(db,"contacts",id);
       await updateDoc(contactRef,contact);
       toast.success("Contact Updated Succesfully !")
      } catch (error) {
        console.log(error);
      }
      toggleOpen();
 };

  return (
    <div>
        <Modal onClose={toggleOpen} isOpen={isOpen}  >
          <Formik 
            validationSchema={contactSchemaValidation}
            initialValues={
              isUpdate ? {
                Name: contact.Name,
                Email: contact.Email,
              }
              :
              {
                Name:"",
                Email:"",
              }
            }
            onSubmit={(values)=>{
              isUpdate ? updateContact(values,contact.id) : addContact(values);
            }}
          >
              <Form className='flex flex-col gap-4'>
                <div className="flex flex-col gap-1 ">
                  <label  htmlFor='Name'>Name</label>
                  <Field name="Name" className="border h-10" />
                  <div className=" text-xs text-red-500">
                    <ErrorMessage name="Name" />
                  </div>
                </div>
                <div className="flex flex-col gap-1 ">
                  <label  htmlFor='Email'>Email</label>
                  <Field type="email" name="Email" className="border h-10" />
                  <div className=" text-xs text-red-500">
                    <ErrorMessage name="Email" />
                  </div>
                </div>
                <button className='bg-orange px-3 py-1.5 border self-end'>
                  {isUpdate ? "Update" : "Add"}  Contact
                  </button>
              </Form>
          </Formik>
        </Modal>
    </div>
  )
}

export default AddAndUpdateContact