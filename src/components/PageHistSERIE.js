import React from 'react'
import Header from './Header'
import Search from '../Search.svg'
import Detail from './Detail'
import { AllAtos } from './BackendEPS'
import FavPreench from '../FavPreench.svg'
import { FavSlots } from './BackendEPS';
// import {RedRightHand,DerooDaEm,Guardiões} from './BackendEPS'
let PathFull;
const { pathname } = window.location
let PathTrue = pathname.replace('/paghistSERIES','')
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
let temp = PathFull.replaceAll(' ','');let callData = temp.replaceAll('.','')

AllAtos.forEach(Ato => {
    if (Ato[0].origin === callData) {
        Data = Ato
    }
});

var AtoAtual = 0
if (Data) {
var EpPCap = Data[1].NumEps

}

var AntCap = AtoAtual++




if (Data) {
if (Data[0].origin === 'RedRightHand' && AntCap > 0) {
    var AddCap = (AtoAtual - 1) * 4 + 1
} 
var AddCap = (AtoAtual - 1) * Data[0].NumEps
}

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

var Data;
const MiniDetail = () => {
    return (
        <div style={{backgroundColor: 'rgba(255,255,255,0.2)',width: '20vw',height: '2px',marginLeft: '32px',marginTop: '18px'}}></div>
    )
}

const Ep = (Num) => {
    let NumEp;
    NumEp = Num
    let descri; 
    let temp = Num
    let i = --temp
    if (Data != null) {
        var NumCap = Data[AntCap].NumCapitulo
        descri = Data[AntCap].Eps[++temp - (EpPCap * NumCap - 1) + 1]
    } else {descri = 'Carregando...'}
    var numToString = NumEp.toString()
    console.log(PathFull)
    return (
        <div key={Num}>
        <div style={{display: 'flex',justifyContent: 'space-evenly',gap: '12px'}}>
        <h2 style={{fontWeight: 'normal',marginLeft:'32px'}}>Episódio {NumEp}</h2>
        <a href='Readpage' onClick={() => {localStorage.setItem('UVC_HistAtual',callData+numToString);localStorage.setItem('PagAnterior',window.location.pathname)}} className='Button'>Ler Agora</a>
        </div>
        <p style={{marginLeft:'32px',opacity: '0.7'}}>{descri}</p>
        <MiniDetail />
    <br />
        </div>
    )
    }
    const DivEps = () => {
        let num = 1
        let numtrue = num + AddCap
        if (Data) {
        var Epis = Data[AntCap].Eps
        } else {var Epis = []}
        return (
            <div>
            {Epis.map(() => (
                Ep(numtrue++)
              ))}
              </div>
        )
    }

const PageHist = () => {
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
    if (FavSlots[0][0] === PathFull || FavSlots[1][0] === PathFull || FavSlots[2][0] === PathFull || FavSlots[3][0] === PathFull || FavSlots[4][0] === PathFull) {TempFav = FavPreench} else {TempFav = Search}
    const [Heart, SetHeart] = React.useState(TempFav)
    function SetFavorite() {
        if (Heart == Search) {
        if (localStorage.UVC_FAV1 === 'undefined' || localStorage.UVC_FAV2 === 'undefined' || localStorage.UVC_FAV3 === 'undefined' || localStorage.UVC_FAV4 === 'undefined' || localStorage.UVC_FAV5 === 'undefined') {
            var preencheu = false
           SetHeart(FavPreench)
           FavSlots.forEach(FavSlot => {
               if (FavSlot.length == 0 && !preencheu) {
                FavSlot.push(PathFull)
               preencheu = true
            }
    })
    
} else {
    alert('Você atingiu o máximo de histórias favoritas(5)')
}
 } else {
        SetHeart(Search)
        FavSlots.forEach(FavSlot => {
            if (FavSlot.includes(PathFull)) {
                FavSlot.pop()
            }
        })
    }
    localStorage.setItem('UVC_FAV1',FavSlots[0][0])
    localStorage.setItem('UVC_FAV2',FavSlots[1][0])
    localStorage.setItem('UVC_FAV3',FavSlots[2][0])
    localStorage.setItem('UVC_FAV4',FavSlots[3][0])
    localStorage.setItem('UVC_FAV5',FavSlots[4][0])
    // console.log(PathFull,FavSlots[0],localStorage.UVC_FAV1)
    preencheu = false
}
  return (
    <div style={{paddingBottom: '200px'}}>
    <Header Nome="Capítulos" />
    <div style={{display:'grid',placeItems:'center'}}>
    <div className={callData} style={{width:'240px',height:'230px',marginTop:'20px',borderRadius: '25px'}}></div>
    <h1 style={{marginTop: '20px'}}>{PathFull}</h1>
    <p style={{textAlign:'center',padding: '0px 20px',fontSize:'20px'}}>{localStorage.UVC_Desc}</p>
    <img style={{marginTop: '12px'}} src={Heart} onClick={SetFavorite} />
    <br />
    <Detail />
    <h2 style={{fontWeight: 'normal'}}>Ato {romanize(AtoAtual)}</h2>
    <h2 style={{fontWeight: 'normal'}}>{Data != true ? Data[AntCap].Nome : ''}</h2>
    </div>
    <br />
    {/* <Ep Num={1+AddCap}/>
    <MiniDetail />
    <br />
   <Ep Num={2+AddCap}/>
    <MiniDetail />
    <br />
   <Ep Num={3+AddCap}/>
    <MiniDetail />
    <br />
   <Ep Num={4+AddCap}/>
    <MiniDetail /> */}
    <DivEps />

    </div>
  )
}


export default PageHist