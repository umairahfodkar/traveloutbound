// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './Layout';
// import Aboutus from './components/Aboutus';
// import Ourservices from './components/Ourservices';
// import Itenary from './components/Itenary';
// import Contactus from './components/Contactus';
// import Home from './components/Home';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//         <Route path="" element={<Home/>} />
//           <Route path="about" element={<Aboutus />} />
//           <Route path="service" element={<Ourservices />} />
//           <Route path="itenary" element={<Itenary />} />
//           <Route path="contact" element={<Contactus />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
























































import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Aboutus from './components/Aboutus';
import Ourservices from './components/Ourservices';
import Itenary from './components/Itenary';
import Contactus from './components/Contactus';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Nested routes within Layout */}
          <Route index element={<Home />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="service" element={<Ourservices />} />
          <Route path="itenary" element={<Itenary />} />
          <Route path="contact" element={<Contactus />} />
        </Route>
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
