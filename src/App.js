import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
// import Homepage from './components/Homepage';
import Bookingpage from './components/Bookingpage';

function App() {
  return (
    <>
      <div className="main-container">
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<Bookingpage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
