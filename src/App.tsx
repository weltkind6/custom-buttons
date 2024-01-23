import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <h1>Custom buttons</h1>
      <Button 
      color='success'
      size='L'
      borderRadius
      >
        Button
      </Button>
    </div>
  );
}

export default App;
