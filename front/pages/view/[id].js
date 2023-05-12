import Link from 'next/link';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import  {decode}  from 'html-entities';


function Single(){
	const router=useRouter();
	const [rec, setRec]=useState();
	const [dec, setDec]=useState();


useEffect(() => {
  
  const token = localStorage.getItem("token");
  
  fetch(`http://localhost:8000/api/recepi/${router.query.id}`,{
	   headers: {
          'Authorization': `Bearer ${token}`
        }
  })
  .then(response => response.json())
  .then((data)=>{
	  setRec(data);
	  let x=decode(data.content);
	 setDec(x);
  }).catch((error) => {
		  
		router.push('/login');
	  });
  
}, []);
if(rec){
	return(
	  <>
	   <Link href="/" className="btn btn-dark mb-4">Back to Home</Link>   
        
		<h2 className="my-2">{rec.title}</h2>
		 <div dangerouslySetInnerHTML={{ __html: dec }} />
		 
		 <h4>Ingrediants</h4>
		  <ul>
		 {
			
			 rec.ingrediants.map((item)=>{
				 
				   return(
				     <li>{item}</li>
				   )
				
			 })
			  
		 }
		 </ul>
	  </>
	)
}else{
	return(
	<>
	 <p>no data</p>
	 </>
	)
}
}

export default Single;














