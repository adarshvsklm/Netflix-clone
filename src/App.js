import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import axios from 'axios'
import {originals,action,comedy,horror} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title="Action "  isSmall/>
      <RowPost url={comedy} title="Comedy "  isSmall/>
      <RowPost url={horror} title="Horror "  isSmall/>


      
    </div>
  );
}

export default App;
