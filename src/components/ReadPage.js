import React from 'react'
import Header from './Header'
import Ciecon from './texts/Ciecon'
import Hades from './texts/Hades'
import Kerry from './texts/Kerry'
import OGlacialFimdomundo from './texts/OGlacialFimdomundo'
import PunhoMortal from './texts/PunhoMortal'
import RedRightHand from './texts/RedRightHand'




const readPage = () => {
    var HistAtual = localStorage.UVC_HistAtual
    let HistComp;
    if (HistAtual === 'Ciecon') {
    HistComp = Ciecon
    } else if (HistAtual === 'Hades') {
      HistComp = Hades
      } else if (HistAtual === 'Kerry') {
      HistComp = Kerry
      } else if (HistAtual === 'OGlacialFimdomundo') {
      HistComp = OGlacialFimdomundo
      } else if (HistAtual === 'PunhoMortal') {
      HistComp = PunhoMortal
      } else if (HistAtual.startsWith('Red')) {
      HistComp = RedRightHand
      } else {window.location.pathname = '/error'}
      return (
    <div id='#top' style={{paddingBottom: '120px'}}>
        <Header Nome="Leitura"/>
        <div style={{padding: '40px 32px'}}>
        <HistComp />
        </div>
        <div style={{display: 'grid',placeItems: 'center'}}>
        <a className='Button' href='#top'>Voltar ao Topo</a>

        </div>
        
    </div>
)
}
export default readPage