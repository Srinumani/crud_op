 
import './App.css';
import Home from './Components/Home';
import { Provider } from 'react-redux';
 import { userstore } from './Components/Redux/Store';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './Components/Create';
import Edit from './Components/Edit';

function App() {
  return(
    <div className="App">
       <Provider store={userstore}> 
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/create" element={<Create/>}></Route>
         <Route path="/edit/:id" element={<Edit/>}></Route>

      </Routes>
   </BrowserRouter>      
       </Provider>
    </div>
  );
}

export default App;
