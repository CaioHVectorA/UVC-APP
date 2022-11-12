import React from 'react'
import Favorite from '../Favorite.svg'
import Search from '../Search.svg'
import Options from '../Options.svg'
import Back from './Volta.svg'
// um detalhe:Search e Favorite tao trocados
const Header = (props) => {
  const { pathname } = window.location
  const NotHome = pathname !== '/'
  console.log(NotHome)
  let marginLeft;
  let displaySeta;
  if (NotHome) {
    marginLeft = '60px'
    displaySeta = 'block'
  } else {marginLeft = '40px';displaySeta = 'none'}
  var EstiloSeta = {width:'38px',height:'38px',margin:'0',position:'absolute',top:'14px',left: '12px',display:displaySeta}
  return (
    <div>
    <header style={{width: '100vw',backgroundColor: '#010101',height:'72px'}}>
      <img style={EstiloSeta} src={Back} />
    <h1 style={{color:'white',marginLeft:marginLeft,position:'relative',top:'6px',fontWeight:'normal'}}>{props.Nome}</h1>
    <img onClick={() => {document.querySelector('.menu').classList.toggle('displaynone')}} style={{float: 'right',marginTop:'-42px'}} src={Options} />
    <img style={{float: 'right',marginTop:'-42px'}} src={Search} />
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