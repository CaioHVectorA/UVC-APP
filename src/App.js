import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Detail from './components/Detail';
import Home from './components/Home';
import './imgs.css'
import PageSerie from './components/PageHistSERIE';
import PageSolos from './components/PageHistSOLOS';
import { BrowserRouter, Routes, Route } from 'react-router-dom';let PathFull;
const { pathname } = window.location
let PathTrue = pathname.replace('/paghist','')
const Space = PathTrue.includes('%20')
 if (!Space) {
    PathFull = PathTrue
} else {
    PathFull = PathTrue.replaceAll('%20',' ')
}
if (PathFull.startsWith('Guardi')) {
    PathFull = 'Guardiões'
}
if (PathFull.startsWith('Deroo')) {
    PathFull = 'Deroo Da em...'
}
if (PathFull.startsWith('https://uvcapp.netlify.app')) {
 var PathFulldoFull = PathFull.replace('https://uvcapp.netlify.app','')
}
function App() {
  const { pathname } = window.location;
  let Page;
  if (pathname === '/') {
    Page = Home
  } else if (pathname.startsWith('/paghistSERIES')) {
    Page = PageSerie
  } else if (pathname.startsWith('/paghistSOLOS')) {
    Page = PageSolos
  }
  return (
    <div>
      <Page />
    </div>
  );
}

export default App;
