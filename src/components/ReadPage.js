import React from 'react'
import Header from './Header'
import Ciecon from './texts/Ciecon'
import Hades from './texts/Hades'
import Kerry from './texts/Kerry'
import OGlacialFimdomundo from './texts/OGlacialFimdomundo'
import PunhoMortal from './texts/PunhoMortal'



const readPage = () => {
    var HistAtual = localStorage.UVC_HistAtual
    let HistComp;
    if (HistAtual === 'Ciecon') {
    HistComp = Ciecon
    }
    if (HistAtual === 'Hades') {
      HistComp = Hades
      }
    if (HistAtual === 'Kerry') {
      HistComp = Kerry
      }
    if (HistAtual === 'OGlacialFimdomundo') {
      HistComp = OGlacialFimdomundo
      }
    if (HistAtual === 'PunhoMortal') {
      HistComp = PunhoMortal
      }
    if (HistAtual === 'Kerry') {
      HistComp = Kerry
      }
    if (HistAtual === 'Kerry') {
      HistComp = Kerry
      }
    if (HistAtual === 'Kerry') {
      HistComp = Kerry
      }
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