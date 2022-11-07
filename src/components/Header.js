import React from 'react'
import Favorite from '../Favorite.svg'
import Search from '../Search.svg'
import Options from '../Options.svg'
// um detalhe:Search e Favorite tao trocados
const Header = (props) => {


  return (
    
    <header style={{width: '100vw',backgroundColor: '#010101',height:'72px'}}>
    <h1 style={{color:'white',marginLeft: '27px',position:'relative',top:'6px',fontWeight:'normal'}}>{props.Nome}</h1>
    <img style={{float: 'right',marginTop:'-42px'}} src={Options} />
    <img style={{float: 'right',marginTop:'-42px'}} src={Search} />
    <img style={{float: 'right',marginTop:'-42px'}} src={Favorite} />

    </header>
  )
}

export default Header