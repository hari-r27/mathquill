"use client"
import DisplayComponent from '@/app/component/displayComponent';
import React, { useState } from 'react'
function page() {
let[get,dataget]=useState("1");
// let{formData}=form;
// console.log(form.name)

  return (
    <DisplayComponent/>
  )
}

export default page