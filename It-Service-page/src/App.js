import './App.css';
import Footer from './components/Footer';
import ITServicesPage from './components/ITServicesPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext'; 

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <div className="app-container">
            <div className="sidebar">
              <Navbar /> 
            </div>
            <div className="all-pages">
              <Routes>
                <Route path="/services/it-consulting" element={<ITServicesPage />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
