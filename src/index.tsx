import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './features/app/App';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

const root = ReactDOM.createRoot( 
  document.getElementById('root')!
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './features/app/App';
// import { RouterProvider } from 'react-router-dom'
// import { createRoot } from 'react-dom/client'
// import reportWebVitals from './reportWebVitals';

// import router from './app/router'

// // const root = ReactDOM.createRoot(
// //   document.getElementById('root') as HTMLElement
// // );
// const container = document.getElementById('root')!
// const root = createRoot(container)

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// reportWebVitals(console.log);
