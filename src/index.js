import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './global.css';
import App from './App';
import Details from './details/Details';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>
<<<<<<< HEAD
          <Route path='/details' element={<Details/>}/>
        </Routes>
    </BrowserRouter>
);


=======
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
    </BrowserRouter>
);
>>>>>>> parent of 140eca9 (estilização)