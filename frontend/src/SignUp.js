import {React,useState} from 'react'
import axios from 'axios';


export default function SignUp() {
  const [name, setname] = useState('');
  const [username, setusername] = useState('');
  const [role, setrole] = useState('');
  const [email, setemail] = useState('');
  const [contact, setcontact] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [npassword, setnpassword] = useState('');

  const handleSubmit=()=>{
    if(npassword!==cpassword){
      alert("Password Mismatched !!!")
      return;
    }
    axios.post(process.env.REACT_APP_HOST+'/user/signUp',{
      username:username,
      password: npassword,
      name: name,
      contact:contact,
      email:email,
      role: role
    })
    .then((res)=>{
      console.log(res.data);
      if (res.data.err) {
				alert(res.data.err);
			}
			if (res.data.status === 1) {
				alert("Account Created Successfully !!!");
        window.location.replace(res.redirect);
			}
    })
    .catch(function (error) {
      console.log(error);
			alert("Something Went Wrong :( \n Try Again !!!");
    });

  }

  return (
    <div className='SignUp'>
      <div className="min-h-screen ">
        <div className="flex md:justify-end">
          <div className="bg-white min-h-screen md:w-1/3 w-full flex justify-center items-center bg-opacity-90">
            <div>
              <form onSubmit={(e)=>{
                e.preventDefault();
                handleSubmit()
              }}>
                <div>
                  <h1 className="text-2xl font-bold text-center">Create Account Here</h1>
                </div>
                <div className="flex flex-wrap -mx-auto my-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block text-md mb-2" for="name">
                      Name
                      </label>
                      <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" required id="name" type="text"value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter Name" name="name"/>
                    </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-md mb-2" for="username">
                      Username
                    </label>
                    <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" required id="username" name="username"value={username} onChange={(e) => setusername(e.target.value)} type="text" placeholder="Enter Username"/>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-auto my-5">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block text-md mb-2" for="email">Email</label>
                    <input id="email" className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter Email"/>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-md mb-2" for="contact">Contact</label>
                    <input id="contact" className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="contact" value={contact} onChange={(e) => setcontact(e.target.value)} placeholder="Enter Contact"/>
                  </div>
                </div>
                <div className="md:w-1/2 px-3 my-5">
                  <label className="block text-md mb-2" for="role">Role</label>
                  <select name="role" id="role" className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" value={role} onChange={(e) => setrole(e.target.value)}>
                    <option value="3">Guest</option>
                    <option value="2">Author</option>
                    <option value="1">Admin</option>
                  </select>
                </div>
                <div className="flex flex-wrap -mx-auto my-5">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block text-md mb-2" for="npassword">New Password</label>
                    <input id="npassword" className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="npassword" value={npassword} onChange={(e) => setnpassword(e.target.value)} placeholder="New Password"/>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block text-md mb-2" for="cpassword">Confirm Password</label>
                    <input id="cpassword" className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="cpassword" value={cpassword} onChange={(e) => setcpassword(e.target.value)} placeholder="Confirm Password"/>
                  </div>
                </div>
                <div className="">
                  <button id="submit"className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100" >Sign Up</button>
                </div>
              </form>
              <p className="mt-8 text-center"> Already have an account? <a href="/" className="cursor-pointer text-sm text-blue-600"> Login Here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
