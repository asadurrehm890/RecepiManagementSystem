import Link from 'next/link'; 
import {useState} from 'react';
import {useRouter} from 'next/router';

function Register(){
	
	const router=useRouter();
	
	const [email, setEmail]=useState('');
	const [password, setPassword]=useState('');
	const [username, setUsername]=useState('');
	

	const handleSubmit=(e)=>{
	  e.preventDefault();
		
	  fetch("http://localhost:8000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
		username,  
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then(() => {
		  router.push('/login');
	  })
      .catch((error) => console.error(error));
	}
	
	return(
	 <> 
	   <form onSubmit={handleSubmit}>
	      <label className="mb-4 w-100 form-label">
		     User Name
			 <input className="mt-2 form-control" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
		  </label>
		  <label className="mb-4 w-100 form-label">
		     Email
			 <input className="mt-2 form-control" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
		  </label>
		  <label className="mb-4 w-100 form-label">
		     Password
			 <input className="my-2 form-control" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
		     
		  </label>
		  <button type="submit" className="btn btn-dark">Regsiter</button>
	   </form>
	 
	   <p className="text-center my-4">If already register, login <Link href="/login">here</Link></p>
	 </>
	)
}
export default Register;