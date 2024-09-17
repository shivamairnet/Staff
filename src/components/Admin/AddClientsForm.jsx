import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faPhone, faX, faBuilding } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button'
import { useDispatch } from 'react-redux';
import { createClientAsync } from '../../features/Admin/manageclientsSlice';



const AddClientsForm = ({ onCancel }) => {

    const dispatch=useDispatch();

    const handleSubmit=async(values,{setSubmitting,resetForm})=>{
        try{
            const name=`${values.firstname} ${values.lastname}`
            const client={...values,
                name:name,
                email:values.email,
                phone:values.phone,
                address:values.businessname
            }

            dispatch(createClientAsync(client))
            console.log('Form Values:',client);
            resetForm();
            alert('Client Added Successfully');
            onCancel();
        }catch(error){
            console.log('Error submitting form:',error);
        }
    };

    return (
        <div className=" bg-white border-2 shadow-2xl rounded-lg h-full">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-between mt-5">
                    <h2 className="text-4xl font-bold m-1">Add Client Information</h2>
                </div>
                <div className="flex space-x-3">
                    <FontAwesomeIcon icon={faX} className='flex pr-10 mt-5 text-3xl cursor-pointer' style={{ color: "#447dee" }} onClick={onCancel} />
                </div>
            </div>
            <hr className=" shadow-2xl mb-5 border-t-2 w-full" />
            <div className="m-2 p-2 bg-blue-50 border-2 border-gray-200 shadow-md rounded-lg lg:h-[490px]">

                <h2 className="text-2xl font-bold m-4">Client Details</h2>
                <Formik
                    initialValues={{ firstname: '', lastname: '', phone: '', email: '', businessname: '', status: false }}
                    validationSchema={Yup.object({
                        firstname: Yup.string().required('Required'),
                        lastname: Yup.string().required('Required'),
                        phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Required'),
                        email: Yup.string().email('Invalid email format').required('Required'),
                        businessname: Yup.string().required('Required'),
                    })}
                    onSubmit={handleSubmit}
                >
                    
                    {({ isSubmitting }) => (
                        <Form className="p-5 m-4">

                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4">
                                <div className="relative text-black">
                                    <label htmlFor="firstname" className="font-bold text-lg block">First Name*</label>
                                    <FontAwesomeIcon icon={faUser} className="absolute left-2 top-10 text-[#2563EB]" />
                                    <Field
                                        name="firstname"
                                        placeholder="Enter First Name...."
                                        className="w-2/1  px-10 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold focus:placeholder-gray-500 focus:text-gray-700"

                                    />

                                    <ErrorMessage name="firstname" component="div" className="text-red-500" />
                                </div>
                                <div className="relative text-black">
                                    <label htmlFor="lastname" className="font-bold text-lg block">Last Name*</label>
                                    <FontAwesomeIcon icon={faUser} className="absolute left-2 top-10 text-[#2563EB]" />
                                    <Field
                                        name="lastname"
                                        placeholder="Enter Last Name...."
                                        className="w-2/1 px-10 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold focus:placeholder-gray-500 focus:text-gray-700"

                                    />

                                    <ErrorMessage name="lastname" component="div" className="text-red-500" />
                                </div>

                                <div className="relative text-black">
                                    <label htmlFor="phone" className="font-bold text-lg block">Contact Number*</label>
                                    <FontAwesomeIcon icon={faPhone} className="absolute left-2 top-10 text-[#2563EB]" />
                                    <Field
                                        name="phone"
                                        type="text"
                                        placeholder="Enter Phone Number...."
                                        className="w-2/1 px-10 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold focus:placeholder-gray-500 focus:text-gray-700"

                                    // className="w-full px-10 py-2 border border-[#2563EB] rounded-lg bg-white text-black"
                                    />
                                    <ErrorMessage name="phone" component="div" className="text-red-500" />
                                </div>


                                <div className="relative text-black">
                                    <label htmlFor="email" className="font-bold text-lg block">Email Address*</label>
                                    <FontAwesomeIcon icon={faEnvelope} className="absolute left-2 top-10 text-[#2563EB]" />
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email Address...."
                                        className="w-2/1 px-10 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold focus:placeholder-gray-500 focus:text-gray-700"

                                    // className="w-full px-10 py-2 border border-[#2563EB] rounded-lg bg-white text-black"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500" />
                                </div>

                                <div className="relative text-black">
                                    <label htmlFor="businessname" className="font-bold text-lg block">Business Name*</label>
                                    <FontAwesomeIcon icon={faBuilding} className="absolute left-2 top-10 text-[#2563EB]" />
                                    <Field
                                        name="businessname"
                                        placeholder="Business Name...."
                                        className="w-2/1 px-10 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold focus:placeholder-gray-500 focus:text-gray-700"

                                    />

                                    <ErrorMessage name="businessname" component="div" className="text-red-500" />
                                </div>
                                <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-1">
                                    <label htmlFor="additionalNotes" className="font-bold text-lg">Additional Notes</label>
                                    <Field
                                        as="textarea"
                                        name="additionalNotes"
                                        placeholder="Enter any additional information here...."
                                        className="w-full h-[160px] px-4 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold focus:placeholder-gray-500 focus:text-gray-700"
                                    />
                                    <ErrorMessage name="additionalNotes" component="div" className="text-red-500" />
                                </div>

                            </div>
                            <div className="flex justify-end mt-10 ">
                                <Button purpose="Add Client" type="submit" disabled={isSubmitting}>Add Client</Button>
                                <Button purpose="cancel" onClick={onCancel} className="mr-2">Cancel</Button>
                            </div>
                        </Form>
                    )}
                  
                </Formik>
            </div>
        </div>
    );


};

export default AddClientsForm;