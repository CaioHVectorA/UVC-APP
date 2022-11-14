import React, { useState } from 'react'
import { AllSolos } from './BackendSolos';
import Header from './Header';
import Search from '../Search.svg'
import FavPreench from '../FavPreench.svg'
import { FavSlots } from './BackendEPS';


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

if (localStorage.UVC_FAV1 !==  'undefined') {
    FavSlots[0][0] = localStorage.UVC_FAV1
}
if (localStorage.UVC_FAV2 !==  'undefined') {
    FavSlots[1][0] = localStorage.UVC_FAV2
}
if (localStorage.UVC_FAV3 !==  'undefined') {
    FavSlots[2][0] = localStorage.UVC_FAV3
}
if (localStorage.UVC_FAV4 !==  'undefined') {
    FavSlots[3][0] = localStorage.UVC_FAV4
}
if (localStorage.UVC_FAV5 !==  'undefined') {
    FavSlots[4][0] = localStorage.UVC_FAV5
}
let TempFav;
if (FavSlots[0][0] === soloData.nome || FavSlots[1][0] === soloData.nome || FavSlots[2][0] === soloData.nome || FavSlots[3][0] === soloData.nome || FavSlots[4][0] === soloData.nome) {TempFav = FavPreench} else {TempFav = Search}
const [Heart, SetHeart] = React.useState(TempFav)
function SetFavorite() {
    if (localStorage.UVC_FAV1 === 'undefined' || localStorage.UVC_FAV2 === 'undefined' || localStorage.UVC_FAV3 === 'undefined' || localStorage.UVC_FAV4 === 'undefined' || localStorage.UVC_FAV5 === 'undefined') {
    var preencheu = false
    if (Heart == Search) {
       SetHeart(FavPreench)
       FavSlots.forEach(FavSlot => {
           if (FavSlot.length == 0 && !preencheu) {
            FavSlot.push(soloData.nome)
           preencheu = true
        }
})
} else {
    SetHeart(Search)
    FavSlots.forEach(FavSlot => {
        if (FavSlot.includes(soloData.nome)) {
            FavSlot.pop()
        }
    })
}
} else {
    console.log('aaaa')
    alert('Você atingiu o máximo de histórias favoritas(5)')
}
console.log(FavSlots) 

localStorage.setItem('UVC_FAV1',FavSlots[0][0])
localStorage.setItem('UVC_FAV2',FavSlots[1][0])
localStorage.setItem('UVC_FAV3',FavSlots[2][0])
localStorage.setItem('UVC_FAV4',FavSlots[3][0])
localStorage.setItem('UVC_FAV5',FavSlots[4][0])
// console.log(soloData.nome,FavSlots[0],localStorage.UVC_FAV1)
preencheu = false
}

  return (
    <div style={{paddingBottom: '160px'}}>
        <Header Nome={soloData.nome} />
        <br />
        <div className={soloData.nome} style={{width: '210px',height: '180px',borderRadius: '25px',margin: '0 auto'}}></div>
        <br />
        <h1>{soloData.nome}</h1>
        <p style={{textAlign:'center',padding: '0px 26px',fontSize:'20px'}}>{soloData.descricao}</p>
        <div style={{display: 'grid',placeItems: 'center',paddingTop: '20px'}}>
        <a onClick={() => {localStorage.setItem('UVC_HistAtual',callData);localStorage.setItem('PagAnterior',window.location.pathname)}} href='Readpage' className='Button'>Ler Agora</a>
        <img style={{marginTop: '12px'}} onClick={SetFavorite} src={Heart} />
        </div>
    </div>
  )
}

export default PageHistSOLOS