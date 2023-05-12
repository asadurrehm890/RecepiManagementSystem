import {useState, useEffect} from 'react';
import  {decode, encode}  from 'html-entities';
import {useRouter} from 'next/router';

function Create(){
	
	const Router=useRouter();
	
	const [title, setTitle]=useState('');
	const [content, setContent]=useState('');
	const [ingrediants, setIngrediants]=useState('');
	
	const [user, setUser]=useState();
	
	const token = localStorage.getItem('token');
	if(token==null){
		Router.push('/login');
	}
	
	useEffect(()=>{
	
	
	 
      // Make authenticated request to backend API to get user data
      fetch('http://localhost:8000/api/user/current', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then((data) =>{
		
			  setUser(data.username);
			    
		  })
      .catch((error) => {
		  
		  Router.push('/login');
	  });
	
	},[])
	

	const handleSubmit=async(e)=>{
		
		
		
		e.preventDefault();
	
	  const encodedContent=encode(content);
	  const arrIng=ingrediants.split(',');
	
	  await fetch('http://localhost:8000/api/recepi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
		  'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        content:encodedContent,
		ingrediants:arrIng,
       
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // handle success response here
		Router.push('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        // handle error response here
      });
	
	}
	if(user!=null){
	return(
	 <> 
	   <form onSubmit={handleSubmit}>
	      <label className="mb-4 w-100 form-label">
		     Title
			 <input className="mt-2 form-control" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
		  </label>
		  <label className="mb-4 w-100 form-label">
		     Content
			 <textarea rows='10' className="mt-2 form-control" type="text" value={content} onChange={(e)=>setContent(e.target.value)} >
			 
			 </textarea>
		  </label>
		  <label className="mb-4 w-100 form-label">
		     Ingrediants
			 <input className="my-2 form-control" type="text" value={ingrediants} onChange={(e)=>setIngrediants(e.target.value)} />
		     Each ingrediants are separated by commas ','
		  </label>
		  <button type="submit" className="btn btn-dark">Regsiter</button>
	   </form>
	 
	   
	 </>
	)
	}
	
}

export default Create;