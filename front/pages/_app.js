import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import '../public/styles.css';

function App({Component, pageProps}){
	return(
	<>
	<header className="bg-dark py-4">
	  <div className="container">
	   <h1 className="text-center text-white">Recepi Admin</h1>
	   </div>
	</header>
	<main>
	  <div className="container my-5">
	      
		    <Component {...pageProps}/>
		  
	  </div>
	   
	</main>
	<footer className="bg-dark py-2">
	   <div className="container">
	     <p className="text-center text-white mb-0">Source Code is <a className="text-warning" href="">Here</a></p>
	   </div>
   	</footer>
	</>
	)
}
export default App;