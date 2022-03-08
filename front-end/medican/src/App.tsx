import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
            {/* <MainLayout>
                <MainRoutes />
            </MainLayout> */}
            <MainRoutes />
        </BrowserRouter>
  );
}

export default App;
