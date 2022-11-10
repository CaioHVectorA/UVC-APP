import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Detail from './components/Detail';
import Home from './components/Home';
import './imgs.css'
import PageHist from './components/PageHist';

function App() {
  const { pathname } = window.location;
  let Page;
  if (pathname === '/') {
    Page = Home
  } else if (pathname.startsWith('/paghist')) {
    Page = PageHist
  }
  return (
    <div>
      <Page />
    </div>
  );
}

export default App;
