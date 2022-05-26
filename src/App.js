import Home from "./pages/Home";
import Header from "./pages/Header";
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import AddPage from './pages/AddPage'
function App() {
  return (
    <div className="App">   
      <Header/>
  <BrowserRouter>
    <Routes>
    <Route path = '/' exact element = {<Home/>}/>
      <Route path = '/addProduct'  element= {<AddPage/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
