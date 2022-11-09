import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Detail from './components/Detail';
import Home from './components/Home';

function App() {
  const { pathname } = window.location;
  let Page;
  if (pathname === 'Home') {
    Page = Home
  } else {Page = Home}
  return (
    <div>
      <Page />
    </div>
  );
}

export default App;
