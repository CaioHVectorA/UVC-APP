import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Detail from './components/Detail';
import Home from './components/Home';
import './imgs.css'
import PageHist from './components/PageHist';
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
} else {var PathFulldoFull = PathFull}
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
