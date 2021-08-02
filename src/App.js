import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense } from 'react';
import './App.css';
import Toaster from './Components/Alert/Index';
import Dashboard from './Components/Dashboard/Dashboard';
import Spinner from './Components/Spinner/Index';

function App() {
  return (
    <div className='App'>
      <Toaster />
      <Suspense fallback={<Spinner />}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
