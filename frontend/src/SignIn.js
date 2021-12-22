import React from 'react'

export default function SignIn() {
  return (
    <div className='SignIn'>
      <div className="min-h-screen ">
        <div className="flex md:justify-end">
          <div className="bg-white min-h-screen md:w-1/3 w-full flex justify-center items-center bg-opacity-90">
            <div>
              <form>
                <div>
                  <span className="text-sm text-gray-900">Welcome back</span>
                  <h1 className="text-2xl font-bold text-center">Login to your account</h1>
                </div>
                <div className="my-3">
                  <label className="block text-md mb-2" for="role">Role</label>
                  <select name="role" id="role" className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none">
                    <option value="3">Guest</option>
                    <option value="2">Author</option>
                    <option value="1">Admin</option>
                  </select>
                </div>
                <div className="my-5">
                  <label className="block text-md mb-2" for="username">Username</label>
                  <input id="username" className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="username" placeholder="Enter Username"/>
                </div>
                <div className="mt-5">
                  <label className="block text-md mb-2" for="password">Password</label>
                  <input id="password" className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="Enter Password"/>
                </div>
                <div className="">
                  <button id="submit" className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>
                </div>
              </form>
              <p className="mt-8 text-center"> Dont have an account? <a id= "signup"href="/signUp" className="cursor-pointer text-sm text-blue-600"> Join free today</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
