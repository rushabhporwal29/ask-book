import {React,useState} from 'react'
import axios from 'axios';


export default function SignIn() {
  const [role,setRole]=useState('');
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const handleSubmit=()=>{
    axios.post(process.env.REACT_APP_HOST+'/user/signIn', {
      username: username,
      password: password,
      role: role
    }).then(res=>res.data)
    .then(function (data) {
      if (data.err) {
				alert(data.err);
			}
			if (data.status === 1) {
				alert("Successfully Logged In");
				localStorage.setItem("user", username);
				localStorage.setItem("role", role);
				localStorage.setItem("id", data.id);
				localStorage.setItem("status", data.status);
				window.location.replace(data.redirect);
			}
    })
    .catch(function (error) {
      console.log(error);
			alert("Something Went Wrong :( \n Try Again !!!");
    });
  };
  return (
    <div className='SignIn'>
      <div className="min-h-screen ">
        <div className="flex md:justify-end">
          <div className="bg-white min-h-screen md:w-1/3 w-full flex justify-center items-center bg-opacity-90">
            <div>
              <form onSubmit={(e)=>{
                e.preventDefault();
                handleSubmit();}}>
                <div>
                  <span className="text-sm text-gray-900">Welcome back</span>
                  <h1 className="text-2xl font-bold text-center">Login to your account</h1>
                </div>
                <div className="my-3">
                  <label className="block text-md mb-2" htmlFor="role">Role</label>
                  <select name="role" id="role" className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="3">Guest</option>
                    <option value="2">Author</option>
                    <option value="1">Admin</option>
                  </select>
                </div>
                <div className="my-5">
                  <label className="block text-md mb-2" htmlFor="username">Username</label>
                  <input id="username" className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="username" value={username} onChange={(e) => setusername(e.target.value)} placeholder="Enter Username" required/>
                </div>
                <div className="mt-5">
                  <label className="block text-md mb-2" htmlFor="password">Password</label>
                  <input id="password" className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter Password" required/>
                </div>
                <div className="">
                  <button id="submit" className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100" value='submit'>Login now</button>
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
