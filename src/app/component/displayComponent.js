import React from 'react'

const DisplayComponent = (data) => {
    
  return (
    <div className='flex justify-center items-center w-full bg-green-300'>
    <div className=' border-2 w-56 bg-black text-white' >
      <div className='flex justify-center items-center' >
       Your Data
      </div>
         <div className='border-red-500'>
            
           <input type="text" value={data.name}  className='w-56 text-red-700`' />
         </div>
         <div className='w-32 border-red-500'>
           <input type="text"  placeholder="Name" className='focus' />
         </div>
         <div className='border-red-500' >
           <input type="text" placeholder="email" />
         </div>
         <div className='border-red-500' >
           <input type="text" placeholder="mobile" />
         </div>
         <div className='border-red-500'>
           <input type="text" placeholder="mobile"/>
         </div>
     </div>
 </div>
  )
}

export default DisplayComponent
