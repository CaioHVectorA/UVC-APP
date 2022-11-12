import React from 'react'
import Ciecon from './Ciecon'
import Hades from './Hades'

var HistAtual = localStorage.UVC_HistAtual
let HistComp;
if (HistAtual === 'Ciecon') {
HistComp = Ciecon
}
if (HistAtual === 'Hades') {
  HistComp = Hades
  }
const CallTxt = () => {

  return (
    <div><HistComp /></div>
  )
}

export default CallTxt