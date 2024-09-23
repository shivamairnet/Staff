import React,{useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faPhone, faX, faBuilding } from '@fortawesome/free-solid-svg-icons';

import {useSelector, useDispatch } from 'react-redux';
// import { createClientAsync,updateclientByIdAsync,selectselectedClient,fetchClientbyIdAsync } from '../../features/Admin/manageclientsSlice';
// import { createDesignation,updatedesignationById,selectselectedDesignation,fetchDesignationbyIdAsync } from '../../../features/Admin/managedesignationsSlice';
import { createDesignationAsync,updatedesignationByIdAsync,selectselectedDesignation,fetchDesignationbyIdAsync } from '../../../features/Admin/managedesignationsSlice';

import Button from '../../../common/Button';

const AddDesignationsForm = ({ onCancel ,heading,buttonhandle,updatedesignationid}) => {
    let selectedDesignation=null;
    if (heading==='Update') {
        selectedDesignation=useSelector(selectselectedDesignation);
    }
    console.log(selectedDesignation)
    const dispatch=useDispatch();

    useEffect(()=>{
        if (updatedesignationid) {
          dispatch(fetchDesignationbyIdAsync(updatedesignationid));
        }
      },[dispatch,updatedesignationid]);

    const handleSubmit=async(values,{setSubmitting,resetForm})=>{
        try{
            // const name=`${values.firstname} ${values.lastname}`
                const designation={...values,
                    name:values.name,
                    department:values.department,
                    // phone:values.phone,
                    // address:values.businessname
                }
            if(heading==='Update'){
                designation.id=updatedesignationid
                dispatch(updatedesignationByIdAsync(designation));
                console.log('Form Values:',designation);
                alert('Designation Updated Successfully');
            }
            else if (heading==='Add'){ 
                dispatch(createDesignationAsync(designation))
                console.log('Form Values:',designation);
                alert('Designation Added Successfully');
            }

            resetForm();
            onCancel();
        }catch(error){
            console.log('Error submitting form:',error);
        }
    };

    return (
        <div className=" bg-white border-2 shadow-2xl rounded-lg ">
            <div className="flex items-center justify-between ">
                <div className="flex items-center justify-between mt-5">
                    <h2 className="text-4xl font-bold m-1">{heading} Designations</h2>
                </div>
                <div className="flex space-x-3">
                    <FontAwesomeIcon icon={faX} className='flex pr-10 mt-5 text-3xl cursor-pointer' style={{ color: "#447dee" }} onClick={onCancel} />
                </div>
            </div>
            <hr className=" shadow-2xl mb-5 border-t-2 w-full" />
                <Formik
                    initialValues={{ name:selectedDesignation ? selectedDesignation.name: '', department: selectedDesignation ? selectedDesignation.department: '' }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Required'),
                        department: Yup.string().required('Required'),
                    })}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                >
                    
                    {({ isSubmitting }) => (
                        <Form className="p-4">
                            <div className="p-2 bg-blue-50 border-2 border-gray-200 shadow-md h-auto  ">
                            <h2 className="text-2xl  font-bold mb-3 ">Designation Details</h2>
                            <div className='flex justify-center items-center'>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4  ">
                                <div className="relative text-black ">
                                    <label htmlFor="name" className="font-bold text-lg block">Name*</label>
                                    {/* <FontAwesomeIcon icon={faUser} className="absolute left-2 top-10 text-[#2563EB]" /> */}
                                    <Field
                                        name="name"
                                        placeholder="Enter Designation..."
                                        className="md:w-3/4 lg:w-4/5 px-6 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold focus:placeholder-gray-500 focus:text-gray-700"

                                    />

                                    <ErrorMessage name="name" component="div" className="text-red-500" />
                                </div>
                                <div className="relative text-black">
                                    <label htmlFor="department" className="font-bold text-lg block">Department*</label>
                                    {/* <FontAwesomeIcon icon={faUser} className="absolute left-2 top-10 text-[#2563EB]" /> */}
                                    <Field
                                        name="department"
                                        placeholder="Enter Department...."
                                        className=" md:w-3/4 lg:w-4/5 px-6 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold focus:placeholder-gray-500 focus:text-gray-700"

                                    />

                                    <ErrorMessage name="department" component="div" className="text-red-500" />
                                </div>
                            </div>
                            </div>
                            </div>
                            <div className="flex justify-end mt-3">
                                <Button purpose={buttonhandle} type="submit">Add Designation</Button>
                                <Button purpose="cancel" onClick={onCancel} className="mr-2">Cancel</Button>
                            </div>
                        </Form>
                    )}
                  
                </Formik>
            </div>
    );


};

export default AddDesignationsForm;