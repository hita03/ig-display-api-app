import logo from './logo.svg';
import InstaFeed from './InstaFeed';

function App() {
  // console.log(process.env.REACT_APP_ACCESS_TOKEN)
  // console.log(process.env.NODE_ENV)
  return (
    <div className="App">
      <header className="App-header">
      <InstaFeed token={process.env.REACT_APP_ACCESS_TOKEN} limit={20}/>
      </header>
    </div>
  );
}

export default App;
