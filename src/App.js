import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header sourse='https://65d46b083f1ab8c634350f7b.mockapi.io/api/items' />
      <Header sourse='https://65d46b083f1ab8c634350f7b.mockapi.io/api/items2' />
    </div>
  );
}

export default App;
