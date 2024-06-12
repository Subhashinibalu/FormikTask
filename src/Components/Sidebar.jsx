import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
       <div> <nav className="navbar navbar-expand-lg bg-black flex-column  ">
  <div className="container-fluid flex-column ">
    <div className='side-nav'>  <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
   
   <ul className="navbar-nav flex-column p-5 ">
   <h5 className='text-white'>DASHBOARD</h5>
 
     <li className="nav-item mt-3 ">
       <Link to='/' className='text-decoration-none text-white fs-6 '>HOME</Link>
       <hr className='text-white'/>
     </li>
     <li className="nav-item ms-2 mb-3">
     <Link to='/bookinfo' className='text-decoration-none text-white'>Book Info</Link>
     </li>
     <li className="nav-item ms-2 mb-3">
     <Link to='/authorinfo' className='text-decoration-none text-white'>Author Info</Link>
     </li>
    
     <h6 className='text-white mt-3'>ADD DETAILS</h6>
     <hr className='text-white'/>
     <li className="nav-item  ms-2 mb-3">
       <Link to='/addbook' className='text-decoration-none text-white text-center'>Add Book</Link>
      
     </li>

     <li className="nav-item ms-2 mb-3">
     <Link to='/addauthor' className='text-decoration-none text-white'>Add Author</Link>
     
     </li>
     
     
   </ul>
   
 </div></div>
  
   
  </div>
</nav></div>
       
        </>
    );
};

export default Sidebar;


