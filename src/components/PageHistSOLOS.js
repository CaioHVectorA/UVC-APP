import React from 'react'
import { AllSolos } from './BackendSolos';
import Header from './Header';
import Search from '../Search.svg'



const PageHistSOLOS = () => {
    let soloData;
    let PathFull;
const { pathname } = window.location
let PathTrue = pathname.replace('/paghistSOLOS','')
const Space = PathTrue.includes('%20')
 if (!Space) {
    PathFull = PathTrue
} else {
    PathFull = PathTrue.replaceAll('%20',' ')
}
if (PathFull.startsWith('O Glac')) {
    PathFull = 'O Glacial Fim do mundo'
}
if (PathFull.startsWith('Deroo')) {
    PathFull = 'Deroo Da em...'
}
let temp = PathFull.replaceAll(' ','');let callData = temp.replaceAll('.','')
AllSolos.forEach(Solo => {
    if (callData === Solo.nome || PathFull === Solo.nome) {
        soloData = Solo
    }
});
console.log(soloData)
  return (
    <div>
        <Header Nome={soloData.nome} />
        <br />
        <div className={soloData.nome} style={{width: '210px',height: '180px',borderRadius: '25px',margin: '0 auto'}}></div>
        <br />
        <h1>{soloData.nome}</h1>
        <p style={{textAlign:'center',padding: '0px 26px',fontSize:'20px'}}>{soloData.descricao}</p>
        <div style={{display: 'grid',placeItems: 'center',paddingTop: '20px'}}>
        <a onClick={() => {localStorage.setItem('UVC_HistAtual',callData);localStorage.setItem('PagAnterior',window.location.pathname)}} href='Readpage' className='Button'>Ler Agora</a>
        <img style={{marginTop: '12px'}} src={Search} />
        </div>
    </div>
  )
}

export default PageHistSOLOS