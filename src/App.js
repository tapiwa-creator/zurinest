import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Components/Layout';
// Add /Routes/ to the path here:
import AppRoutes from './Routes/AppRoutes'; 

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;