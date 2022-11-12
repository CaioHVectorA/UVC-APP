import React from 'react'
import RRH01 from './RRH/RRH01'
import RRH02 from './RRH/RRH02'
import RRH03 from './RRH/RRH03'
import RRH04 from './RRH/RRH04'
import RRH05 from './RRH/RRH05'

const RedRightHand = () => {
 let HistAtual = localStorage.UVC_HistAtual
 let NumEp;
 let debugerror = false
 if (HistAtual.startsWith('Red')) {
    NumEp = HistAtual.replace('RedRightHand','')
 }
let Page;
 if (NumEp == 1) {
Page = RRH01
 } else if (NumEp == 2) {
    Page = RRH02
  } else if (NumEp == 3) {
    Page = RRH03
} else if (NumEp == 4) {
    Page = RRH04
} else if (NumEp == 5) {
    Page = RRH05
} else {
    window.location = '/error'
}

  return (
    <div>
        <Page />
        </div>
  )
}

export default RedRightHand