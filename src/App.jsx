import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div id="page-container"> 
      <Nav />
      <main className="mx-3 flex-grow"> 
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
