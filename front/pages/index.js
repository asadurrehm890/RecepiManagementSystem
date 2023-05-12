import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import  {decode, encode}  from 'html-entities';

function Home(){
	const Router=useRouter();
	const [user, setUser] = useState(null);
	const [recepi, setRecepi]=useState([]);
	
	useEffect(()=>{
	
	
	 const token = localStorage.getItem('token');
	if(token==null){
		Router.push('/login');
	}
      // Make authenticated request to backend API to get user data
      fetch('http://localhost:8000/api/user/current', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then((data) =>{
		  fetch('http://localhost:8000/api/recepi',{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => response.json())
	  .then((data)=>{
		  setRecepi(data);
	  });
		 
			  setUser(data.username);
			  
			  
		  
		  })
      .catch((error) => {
		  
		  Router.push('/login');
	  });
	
	},[])
	
	
	const handlerdel=async(id)=>{
		  const token = localStorage.getItem('token');
	if(token==null){
		Router.push('/login');
	}
	 
	 try {
      const response = await fetch(`http://localhost:8000/api/recepi/${id}`, {
        method: 'DELETE',
		headers:{
			 'Authorization': `Bearer ${token}`
		}
      })

      if (response.ok) {
        const response = await fetch('http://localhost:8000/api/recepi',{
			headers:{
			 'Authorization': `Bearer ${token}`
		}
		});
      const data = await response.json();
      setRecepi(data);
		
      } else {
        console.log(`Failed to delete item with ID ${id}`)
      }
    } catch (error) {
      console.error(error)
    }
	}
	
	if(user!=null){
	return (
	<>
	<Link className="btn btn-dark mb-4" href="/create">Create Recepi</Link>
	 <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  
  {recepi.map((item)=>{
	  return(
	 <tr key={item._id}>
      <td>{item._id}</td>
      <td>{item.title}</td>
      <td className="d-flex align-items-center">
        <Link href={`/view/${item._id}`} className="me-3"><i className="text-primary bi bi-eye-fill"></i></Link>
	    
	     <button onClick={()=>handlerdel(item._id)} className="bg-transparent border-0"><i className="text-danger bi bi-trash3-fill"></i></button>
	  </td>
    </tr>
	  )
  })}
   
    
  </tbody>
</table>
	</>
	)
	}
}

export default Home;


