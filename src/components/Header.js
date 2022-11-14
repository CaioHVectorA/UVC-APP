import React from 'react'
import Favorite from '../Favorite.svg'
import Search from '../Search.svg'
import Options from '../Options.svg'
import Back from './Volta.svg'
import { FavSlots } from './BackendEPS'
// um detalhe:Search e Favorite tao trocados
const Header = (props) => {
  const { pathname } = window.location
  const NotHome = pathname !== '/'
  let marginLeft;
  let displaySeta;
  if (NotHome) {
    marginLeft = '60px'
    displaySeta = 'block'
  } else {marginLeft = '40px';displaySeta = 'none'}
  var EstiloSeta = {width:'38px',height:'38px',margin:'0',position:'absolute',top:'14px',left: '12px',display:displaySeta}
  function toPagAnterior() {
    if (window.location = localStorage.PagAnterior || !localStorage.PagAnterior) {
      window.location = '/'
    } else {
    window.location = localStorage.PagAnterior
  }
}
let nomeHist
  if (props.Nome.length > 10) {
    nomeHist = 'História'
  } else {
    nomeHist = props.Nome
  }
  return (
    <div>
    <header style={{width: '100vw',backgroundColor: '#010101',height:'72px'}}>
      <img style={EstiloSeta} src={Back} onClick={toPagAnterior}/>
    <h1 style={{color:'white',marginLeft:marginLeft,position:'relative',top:'6px',fontWeight:'normal'}}>{nomeHist}</h1>
    <img onClick={() => {document.querySelector('.menu').classList.toggle('displaynone')}} style={{float: 'right',marginTop:'-42px'}} src={Options} />
    <a href='Fav'><img style={{float: 'right',marginTop:'-42px'}} src={Search} /></a>
    <img style={{float: 'right',marginTop:'-42px'}} src={Favorite} />
    </header>
        <ul className='displaynone menu' style={{position: 'absolute',right:'0px',display: 'grid',gridTemplateRows: '1fr 1fr 1fr'}}>
        <li style={{background: '#010101',fontFamily: 'Gotu',padding: '0px 20px 0px 10px',textAlign: 'left',fontSize: '24px'}}>Saiba Mais</li>
        <li style={{background: '#010101',fontFamily: 'Gotu',padding: '0px 20px 0px 10px',textAlign: 'left',fontSize: '24px'}}>Configurações</li>
        <li style={{background: '#010101',fontFamily: 'Gotu',padding: '0px 20px 0px 10px',textAlign: 'left',fontSize: '24px'}}>Apoie o UVC</li>
      </ul>
      </div>
  )
}

export default Header