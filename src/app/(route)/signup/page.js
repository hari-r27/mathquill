
"use client"

// // import Carousel from '@/app/components/ImageSlider';
// // import { Loader } from '@/app/components/Loader';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import  InputFeild  from '@/app/component/inputfeild';
const Page = () => {
  // State declarations
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode:'+91',
    mobile: '',
    password: '',
    rePassword: '',
    gender: '',
    framework: ''
  });
  const [submittedData, setSubmittedData] = useState(null);
  const handleclick = (e) => {
    e.preventDefault();
  
    // Perform all validations
    validateName();
    validateEmail();
    validateMobile();
    validatePassword();
    validateRePassword();
    validateDropdowns();
    validateGender();
  
    // Check if there are no validation errors
    if (
      !Object.values(errors).some((err) => err !== '') &&
      Object.values(formData).every((field) => field)
    ) {
      setSubmittedData(formData); // Save the form data to display
    } else {
      setSubmittedData(null); // Reset submitted data if the form is invalid
    }
  };
  
  const [errors, setErrors] = useState({
    nameError: '',
    emailError: '',
    mobileError: '',
    passwordError: '',
    rePasswordError: '',
    genderError: '',
    frameworkError: '',
    
  });
  const[getdata,setdata]=useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);
  const routing=useRouter();
  const countryCodes = {
    '+91': 10, // India
    '+71': 7,  // USA
  };
  
  // Handlers for field updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    
    if (name === 'name') validateName();
    if (name === 'email') validateEmail();
    if (name === 'mobile') validateMobile();
    if (name === 'password') validatePassword();
    if (name === 'rePassword') validateRePassword();
    if (name === 'gender') validateGender();
   
    if (name === 'framework') validateDropdowns();
  };

  // Validations

  // username validation it allows only alphabets
  const validateName = () => {
    const { name } = formData;
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!name) {
      setErrors((prev) => ({ ...prev, nameError: 'Name is required' }));
    }else if (name.length<3 || name.length>20){
       setErrors((prev) => ({ ...prev, nameError: 'Name should be between 3-20 character only' })) 
    } 
    else if (!nameRegex.test(name)) {
      setErrors((prev) => ({
        ...prev,
        nameError: 'Name should only contain letters and spaces',
      }));
    } else {
      setErrors((prev) => ({ ...prev, nameError: '' }));
      
      
    }
  };


  // Email validation it allows only a alphanumberic and some special charater
  const validateEmail = () => {
    const { email } = formData;
    const emailRegex = /^[a-zA-Z0-9][^\s@]*@[^\s@]+\.[^\s@]+[a-zA-Z0-9]$/;
  
    if (!email) {
      setErrors((prev) => ({ ...prev, emailError: 'Email is required' }));
    } else if (!emailRegex.test(email)) {
      setErrors((prev) => ({ ...prev, emailError: 'Invalid email format' }));
    } else {
      setErrors((prev) => ({ ...prev, emailError: '' }));
      
    }
  };
  

// this methods is for validate a mobile number based on the country code

const validateMobile = () => {
  const { mobile, countryCode } = formData;
  const expectedLength = countryCodes[countryCode];

  if (!mobile) {
    setErrors((prev) => ({ ...prev, mobileError: 'Mobile number is required' }));
  } else if (mobile.length !== expectedLength) {
    setErrors((prev) => ({
      ...prev,
      mobileError: `Mobile number must be exactly ${expectedLength} digits`,
    }));
  } else {
    setErrors((prev) => ({ ...prev, mobileError: '' }));
  }
};


// this method is for validate a password

  const validatePassword = () => {
    const { password } = formData;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()_+=\-{}[\]:;"'<>,.?/`~\\|]).{8,}$/;

    if (!password) {
      setErrors((prev) => ({ ...prev, passwordError: 'Password is required' }));
    } else if (!passwordRegex.test(password)) {
      setErrors((prev) => ({
        ...prev,
        passwordError:
          'Password must be at least 8 characters, including an uppercase letter, a number, and a special character.',
      }));
    } else {
      setErrors((prev) => ({ ...prev, passwordError: '' }));
      
    }
  };

  // this method is compare the both password 
  const validateRePassword = () => {
    const { password, rePassword } = formData;
    if (!rePassword) { 
      setErrors((prev) => ({ ...prev, rePasswordError: 'Please confirm your password' }));
    } else if (password !== rePassword) {
      setErrors((prev) => ({ ...prev, rePasswordError: 'Passwords do not match' }));
    } else {
      setErrors((prev) => ({ ...prev, rePasswordError: '' }));
      
    }
  };

  // this method is check the dropdown is  selected or not

  const validateDropdowns = () => {
    const {  framework } = formData;
    if(!framework){
      setErrors((prev) => ({
        ...prev,
        frameworkError:   'Please choose a framework' ,
      }));
    }
    else{
      setErrors((prev) => ({
        ...prev,
        frameworkError:   '' ,
      }));
    }
  };

  // this method is validate the gender feild
  const validateGender = () => {
    const { gender } = formData;
    if(!gender){
      setErrors((prev) => ({
        ...prev,
        genderError:   'Please choose a page' ,
      }));
    }
    else{
      setErrors((prev) => ({
        ...prev,
        genderError:   '' ,
      }));
    }
  };

 
  
    

  

  // this method is for validate a form to check all feilds are completed 

  const handleSubmit = (e) => {
    
    e.preventDefault();
    validateName();
    validateEmail();
    validateMobile();
    validatePassword();
    validateRePassword();
    validateDropdowns();
    validateGender();
   
console.log(errors,formData)
    // Check for any errors
    if (
      !Object.values(errors).some((err) => err !== '')&&
       Object.values(formData).every((field)=>field)
    ) {
        console.log("hello")
      setIsSubmitting(true);
      setTimeout(() => {
        console.log('Form Data:', formData);
       
        setIsSubmitting(false);
        setFormData(prev=>({...prev}))
      }, 1000);
      routing.push('/Image');   
 
    } 
  };

//    const showingdata=()=>{
//     setdata(formData)
//   console.log(getdata);
//    }

  return (
    <div className="flex flex-col justify-center items-center   max-w-full min-h-screen lg:flex-row p-3  gap-8 ">
      {/* <div className='max-w-full md:max-w-lg '> <Carousel/> </div> */}
      <div className="max-w-full  w-full  p-5 border border-gray-300 rounded-md bg-gray-100 shadow-md sm:max-w-lg ">
        <h2 className="text-2xl font-semibold mb-4 text-center">Account</h2>
        
        <form onSubmit={handleSubmit}>
        <div className="mb-4 flex justify-center items-center justify-around" >
            <div >
              <label className=' ml-4 bg-green-700 border border-gray-500 text-white font-bold'>
                <input
                
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='font-bolder'
                />
                Sign_up Form
              </label>
              <label className="ml-4   bg-red-500 border-gray-500 text-white font-bolder">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Login_up
              </label>
            </div>
            {errors.genderError && <p className="text-red-600 text-sm">{errors.genderError}</p>}
          </div>
          {/* Name */}
          <div className="mb-4">
            <InputFeild
            label="Name" 
            id="name"
            name="name"
            value={formData.name} 
            onChange={(e) =>  setFormData((prev) => ({
              ...prev,
              name: e.target.value.replace(/[^a-zA-Z\s]/g, '').trim(),
              // this will allow only alphabetic
            }))
            }
            onBlur={handleBlur}
            />
            {errors.nameError && <p className="text-red-600 text-sm">{errors.nameError}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <InputFeild
              label="Email" 
              id="email"
              name="email"
              value={formData.email} 
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value.replace(/[^a-zA-Z0-9._@\-]/gi, '').toLowerCase().trim()                  
                  // we can able to type only a alpabets and mentioned specail char and number
                }))
              }
              onBlur={handleBlur}
              />
            {errors.emailError && <p className="text-red-600 text-sm">{errors.emailError}</p>}
          </div>

          {/* Mobile */}
          <div className="mb-4 ">
            <label className=''>Mobile Number</label>
            <div className='flex  '>
              <div className='bg-white'>
              <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={(e) => {
                    const code = e.target.value;
                    setFormData((prev) => ({ ...prev, countryCode: code }));
                  }}
                  onBlur={handleBlur}
                  className="px-4 py-[14.2px] mr-3 text-base text-black bg-white border-2 rounded-md border-gray-500 focus:outline-none focus:border-gray-400"
                >
                  {Object.keys(countryCodes).map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
              </select>

              </div>
              <div className='w-full'>
              <input
                  className="signup-input"
                  type="text"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      mobile: e.target.value.replace(/[^0-9]/g, '').trim(),
                    }))
                  }
                  onBlur={handleBlur}
                  maxLength={countryCodes[formData.countryCode]}
                />

              </div>
            </div>
            {errors.mobileError && <p className="text-red-600 text-sm">{errors.mobileError}</p>}
          </div>
          {/* Password */}
          <div className="mb-4">
            <InputFeild
              label="Password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  password: e.target.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi, '').trim()
                  // Allows letters, numbers, and common special characters
                }))
              }
              onBlur={handleBlur}
            />
            {errors.passwordError && <p className="text-red-600 text-sm">{errors.passwordError}</p>}
          </div>

          {/* Re-enter Password */}
          <div className="mb-4">
            <InputFeild
              label="Re-Enter Password"
              id="repassword"
              name="rePassword"
              value={formData.rePassword}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  rePassword: e.target.value.replace(/[^a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi, '').trim()
                  // Allows letters, numbers, and common special characters
                }))
              }
              onBlur={handleBlur}
            />
            
            {errors.rePasswordError && <p className="text-red-600 text-sm">{errors.rePasswordError}</p>}
          </div>
          {/* Framework (Dropdown) */}
          <div className="mb-4">
            
            <select
              name="framework"
              value={formData.framework}
              onChange={handleChange}
              onBlur={handleBlur}
              className="signup-input"
            >
              <option value="">Select a framework</option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
              <option value="Svelte">Svelte</option>
            </select>
            {errors.frameworkError && <p className="text-red-600 text-sm">{errors.frameworkError}</p>}
          </div>



          {/* Submit Button */}
<div className='flex justify-center  items-center justify-evenly'>
<div className="mb-2 " >
            <button
              type="submit"
              className="w-34 p-2 bg-green-500 text-white rounded"
              disabled={isSubmitting}
              
            >
              {isSubmitting ?"sub.."  : 'Submit'}
            </button>
          </div>
          <div className="mb-2">
            <button
              type="submit"
              className="w-34 p-2 bg-blue-500 text-white rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ?"can"  : 'Cancel'}
            </button>
          </div>
          <div className="mb-2">
            <div
              type="submit"
              className="w-34 p-2 bg-red-500 text-white rounded"
            //   disabled={data}
              onClick={handleclick}
            >ShowData
            </div>

          </div>
</div>

          
        </form>
        {/* {submittedData && (
        <div style={{ border: "1px solid #ddd", padding: "10px" }}> */}
          {/* <h2>Submitted Data:</h2> */}
          {/* <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Mobile:<span>{submittedData.countryCode}</span></strong> {submittedData.mobile}</p>
          <p><strong>Email:</strong> {submittedData.framework}</p> */}
        {/* </div> */}
      {/* // )} */}
      {submittedData ? (
       <div style={{ border: "1px solid #ddd", padding: "10px" }}>
       <p><strong>Name:</strong> {submittedData.name}</p>
       <p><strong>Email:</strong> {submittedData.email}</p>
       <p><strong>Mobile: <span>{submittedData.countryCode}</span></strong> {submittedData.mobile}</p>
      </div>
       ) : (
             <div style={{ border: "1px solid #ddd", padding: "10px", color: "red" }}>
              <p>No data added</p>
               </div>
             )}


      </div>
    </div>
  );
};

export default Page;