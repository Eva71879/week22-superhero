import './App.css'
import CardList from './components/CardList'
import data from './data/data.json';

function App() {
  console.log(data[0].name);

  return (
    <div className='app'>
        <CardList/>
    </div>
  )
}

export default App