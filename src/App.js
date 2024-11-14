import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Data from './data.json';
import CardList from './CardList';




function App() {
  
  return (
    <div className="App">
      <CardList data={Data}/>
      
    </div>
  );
}

export default App;