import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"

import { Input } from "@/components/ui/input"

import { SignupValidation } from "@/lib/validation"
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { toast } from "sonner"



const Signup = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate()


  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      firstname: "",
      lastname: '',
      email: '',
      password: '',
      image: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    localStorage.setItem('user', JSON.stringify(values))
    localStorage.setItem('session', true)
    toast.success('Signed up successfully')
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          className="border-primary"
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-3 text-xs text-text opacity-70">First name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="border-primary outline-none"
                  placeholder="Enter your first name"
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-3 text-xs text-text opacity-70">Last name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="border-primary outline-none"
                  placeholder="Enter your last name"
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-3 text-xs text-text opacity-70">Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="border-primary outline-none"
                  placeholder="Enter your email"

                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-3 text-xs text-text opacity-70">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="border-primary outline-none text-text"
                  placeholder="Enter your password"
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <div>
          <input
            className='hidden'
            ref={fileInputRef}
            type="file"
            name="myImage"
            onChange={(event) => setSelectedImage(event.target.files[0])}
          />
          <img
            className='rounded-full cursor-pointer object-cover w-16 h-16'
            onClick={handleIconClick}
            src={`${selectedImage ? URL.createObjectURL(selectedImage) : 'assets/icons/camera.png'}`}
            alt="camera-icon"
          />
        </div> */}
        <Button type="submit" className="w-full text-white">Continue</Button>
      </form>
      <div className='flex flex-1 items-center justify-evenly gap-2 my-5 text-xs'>
        <span className='w-full h-[1px] bg-slate-500'></span>
        <p className='whitespace-nowrap'>Or continue with</p>
        <span className='w-full h-[1px] bg-slate-500'></span>
        <hr />
      </div>
      <div className='flex justify-between'>
        <img src="assets/icons/facebookAuth.png" alt="facebook-icon" width={50} height={50} />
        <img src="assets/icons/appleAuth.png" alt="apple-icon" width={50} height={50} />
        <img src="assets/icons/googleAuth.png" alt="google-icon" width={50} height={50} />
        <img src="assets/icons/gmailAuth.png" alt="gmail-icon" width={50} height={50} />
      </div>
      <div className='w-full h-[1px] my-5 bg-slate-500'></div>
      <p className='text-xs text-text'>
        By signing in or creating an account, you agree with our
        <span className='text-primary'>Terms & conditions</span> and <span className='text-primary'>Privacy policy</span>
      </p>
    </Form>
  )
}

export default Signup