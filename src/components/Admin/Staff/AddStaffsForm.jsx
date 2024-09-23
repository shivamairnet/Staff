import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faPhone, faX, faBuilding } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../common/Button';
import { useSelector, useDispatch } from 'react-redux';
// import { createClientAsync, updateclientByIdAsync, selectselectedClient, fetchClientbyIdAsync } from '../../features/Admin/manageclientsSlice';
import { createStaffAsync, updatestaffByIdAsync, selectSelectedStaff, fetchStaffbyIdAsync } from '../../../features/Admin/managestaffsSlice';
// import ToggleButton from '../../components/ToggleButton';
import ToggleButton from '../../../common/ToggleButton';
import CheckBoxes from '../../../common/Checkboxes';
// import CheckBoxes from '../../components/CheckBoxes';
// import account from '../../assets/Add Staff Icons/account.svg';
// import emailIcon from '../../assets/Add Staff Icons/email.svg';
// import invisible from '../../assets/Add Staff Icons/invisible.svg';
// import phoneIcon from '../../assets/Add Staff Icons/phone.svg';

const AddStaffsForm = ({ onCancel, heading, buttonhandle, updatestaffid }) => {
    let selectedStaff = null;
    if (heading === 'Update') {
        selectedStaff = useSelector(selectSelectedStaff);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        if (updatestaffid) {
            dispatch(fetchStaffbyIdAsync(updatestaffid));
        }
    }, [dispatch, updatestaffid]);

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const staff = {
                ...values,
                name: values.name,
                email: values.email,
                phone: values.phone,
                designation: values.designation,
                status: values.status,
                access: values.access,
            };

            if (heading === 'Update') {
                staff.id = updatestaffid;
                dispatch(updatestaffByIdAsync(staff));
                alert('Staff Updated Successfully');
            } else if (heading === 'Add') {
                dispatch(createStaffAsync(staff));
                alert('Staff Added Successfully');
            }

            resetForm();
            onCancel();
        } catch (error) {
            console.log('Error submitting form:', error);
        }
    };

    return (
        <div className="bg-white border-2 shadow-2xl rounded-lg">
            <div className="flex items-center justify-between">
                <h2 className="text-4xl font-bold m-1">{heading} Staff Information</h2>
                <FontAwesomeIcon icon={faX} className="pr-10 mt-5 text-3xl cursor-pointer" style={{ color: "#447dee" }} onClick={onCancel} />
            </div>
            <hr className="shadow-2xl mb-5 border-t-2 w-full" />
            <Formik
                initialValues={{
                    name: selectedStaff ? selectedStaff.name : '',
                    email: selectedStaff ? selectedStaff.email : '',
                    phone: selectedStaff ? selectedStaff.phone : '',
                    designation: selectedStaff ? selectedStaff.designation : '',
                    access: selectedStaff ? selectedStaff.access : '',
                    status: selectedStaff ? selectedStaff.status : false,
                    password: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Required'),
                    phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Required'),
                    email: Yup.string().email('Invalid email format').required('Required'),
                    designation: Yup.string().required('Required'),
                    access: Yup.string().required('Required'),
                    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
                })}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ isSubmitting }) => (
                    <Form className="p-4">
                        <div className="p-2 bg-blue-50 border-2 border-gray-200 shadow-md">
                            <h2 className="text-2xl font-bold mb-3">Staff Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                <div className="relative text-black">
                                    <label htmlFor="name" className="font-bold text-lg block">Name*</label>
                                    {/* <img src={account} alt="User Icon" className="absolute left-2 top-10 w-6 h-6" /> */}
                                    <Field
                                        name="name"
                                        placeholder="Enter Name..."
                                        className="w-full px-8 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500" />
                                </div>
                                {/* <div className="relative text-black">
                                    <label htmlFor="name" className="font-bold text-lg block">Last Name*</label>
                                
                                    <Field
                                        name="name"
                                        placeholder="Enter Last Name..."
                                        className="w-full px-8 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500" />
                                </div> */}

                                <div className="relative text-black">
                                    <label htmlFor="email" className="font-bold text-lg block">Email*</label>
                                    {/* <img src={emailIcon} alt="Email Icon" className="absolute left-2 top-10 w-6 h-6" /> */}
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email..."
                                        className="w-full px-8 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500" />
                                </div>

                                <div className="relative text-black">
                                    <label htmlFor="password" className="font-bold text-lg block">Password*</label>
                                    {/* <img src={invisible} alt="Password Icon" className="absolute left-2 top-10 w-6 h-6" /> */}
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="Enter Password..."
                                        className="w-full px-8 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500" />
                                </div>

                                <div className="relative text-black">
                                    <label htmlFor="phone" className="font-bold text-lg block">Contact Number*</label>
                                    {/* <img src={phoneIcon} alt="Phone Icon" className="absolute left-2 top-10 w-6 h-6" /> */}
                                    <Field
                                        name="phone"
                                        placeholder="Enter Phone Number..."
                                        className="w-full px-8 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold"
                                    />
                                    <ErrorMessage name="phone" component="div" className="text-red-500" />
                                </div>

                                <div className="relative text-black">
                             <label htmlFor="designation" className="font-bold text-lg">Choose Designation</label>
                             <Field
                              as="select"
                              name="designation"
                              className="w-full px-8 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black font-bold"
                                >
                                <option value="" disabled>Choose Staff Designation...</option>
                               
                                <option value="Manager">Manager</option>
                                <option value="Team Lead">Team Lead</option>
                                <option value="Software Engineer">Software Engineer</option>
                                <option value="Product Manager">Product Manager</option>
        
                {/* Dynamically populate designation options */}
                {/* {Array.from(new Set(staffData.map((staff) => staff.designation))).map((designation, index) => (
                  <option key={index} value={designation}>
                    {designation}
                  </option>
                ))} */}
                                </Field>
                               <ErrorMessage name="designation" component="div" className="text-red-500" />
                                    </div>

                                {/* <div className="relative text-black">
                                    <label htmlFor="access" className="font-bold text-lg block">Access*</label>
                                    <Field
                                        name="access"
                                        placeholder="Enter Access Level..."
                                        className="w-full px-8 py-2 border-2 border-[#2563EB] rounded-lg bg-white text-black placeholder-gray-400 font-bold"
                                    />
                                    <ErrorMessage name="access" component="div" className="text-red-500" />
                                </div> */}

                                {/* <div className="relative text-black">
                                    <label htmlFor="status" className="font-bold text-lg block">Status</label>
                                    <ToggleButton name="status" />
                                    <ErrorMessage name="status" component="div" className="text-red-500" />
                                </div> */}

                            </div>
                           
                            <div className="flex justify-between p-5">
                             <div className="mt-12 relative text-black">
                              <label htmlFor="access" className="font-bold text-lg">Access Roles:</label>
                             <div className='flex'>
                             <CheckBoxes />
                              <label htmlFor="access" className="font-bold text-md">Full Access</label>
                             </div>
                            </div>

                           <div className="mt-8 relative text-black">
                            <label htmlFor="status" className="font-bold text-lg">Staff Status:</label>
                            <ToggleButton />
                            </div>
                           </div>
                        </div>

                        <div className="flex justify-end mt-3">
                            <Button purpose={buttonhandle} type="submit">
                                {heading === 'Update' ? 'Update Staff' : 'Add Staff'}
                            </Button>
                            <Button purpose="cancel" onClick={onCancel} className="ml-2">
                                Cancel
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddStaffsForm;
