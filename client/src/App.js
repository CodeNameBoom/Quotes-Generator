
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




import Banner from './banner/Banner';
import CreatePost from './createpost/CreatePost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/create-post' element={<CreatePost />} />

      </Routes>
    </Router>
  );
}

export default App;
