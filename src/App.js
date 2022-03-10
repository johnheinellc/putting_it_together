import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"John"}lastName = {"Heine"}age = {34}hairColor = {"Red"}></PersonCard>
      <PersonCard firstName = {"Marry"}lastName = {"Blige"}age = {51}hairColor = {"Blonde"}></PersonCard>
      <PersonCard firstName = {"Jimmy"}lastName = {"Hendrix"}age = {80}hairColor = {"Black"}></PersonCard>
      <PersonCard firstName = {"Frank"}lastName = {"Sinatra"}age = {107}hairColor = {"Brown"}></PersonCard>



    </div>
  );
}

export default App;
