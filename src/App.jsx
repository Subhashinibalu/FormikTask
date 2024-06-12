import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BookInfo from './Pages/BookInfo';
import AuthorInfo from './Pages/AuthorInfo';

import EditDetails from './Pages/EditDetails';
import AddBook from './Pages/AddBook';
import AddAuthor from './Pages/AddAuthor';



const App = () => {
    const [id, setId] = useState(0)
  return (
    <>
<BrowserRouter>
<div>
<Header/>
</div>
<div className=''>
<div className='d-flex '>
<Sidebar />
<Routes>
  <Route path='/' element={<Home setId={setId}/>}/>
  <Route path='/bookinfo' element={<BookInfo setId={setId}/>}/>
  <Route path='/authorinfo' element={<AuthorInfo setId={setId}/>}/>
  <Route path='/editdetails/:id' element={<EditDetails id={id}/>}/>
  <Route path='/addbook' element={<AddBook/>}/>
  <Route path='/addauthor' element={<AddAuthor/>}/>

</Routes>
</div>
</div>



</BrowserRouter>
    </>
  );
};

export default App;