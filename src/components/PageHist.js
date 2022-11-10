import React from 'react'
import Header from './Header'
import Search from '../Search.svg'
import Detail from './Detail'

const Ep = () => {
return (
    <div>
    <div style={{display: 'flex',justifyContent: 'space-evenly',gap: '12px'}}>
    <h2 style={{fontWeight: 'normal',marginLeft:'32px'}}>Episódio 1</h2>
    <a className='Button'>Ler Agora</a>
    </div>
    <p>Descriçao aqui</p>
    </div>
)
}

const MiniDetail = () => {
    return (
        <div style={{backgroundColor: 'rgba(255,255,255,0.2)',width: '20vw',height: '2px',marginLeft: '32px',marginTop: '18px'}}></div>
    )
}

const PageHist = () => {
    let PathFull;
    const { pathname } = window.location
    let PathTrue = pathname.replace('/paghist','')
   const Space = PathTrue.includes('%20')
     if (!Space) {
        PathFull = PathTrue
    } else {
        PathFull = PathTrue.replaceAll('%20',' ')
    }

    console.log(PathFull.startsWith('Guardi'),PathFull)
    if (PathFull.startsWith('Guardi')) {
        PathFull = 'Guardiões'
    }

  return (
    <div style={{paddingBottom: '200px'}}>
    <Header Nome="Capítulos" />
    <div style={{display:'grid',placeItems:'center'}}>
    <div className={PathFull} style={{width:'240px',height:'230px',marginTop:'20px',borderRadius: '25px'}}></div>
    <h1 style={{marginTop: '20px'}}>{PathFull}</h1>
    <p style={{textAlign:'center',padding: '0px 20px',fontSize:'20px'}}>{localStorage.UVC_Desc}</p>
    <img style={{marginTop: '12px'}} src={Search} />
    <br />
    <Detail />
    <h2 style={{fontWeight: 'normal'}}>Ato II</h2>
    <h2 style={{fontWeight: 'normal'}}>Diplomacia Falsa</h2>
    </div>
    <br />
    <div style={{display: 'flex',justifyContent: 'space-evenly',gap: '12px'}}>
    <h2 style={{fontWeight: 'normal',marginLeft:'32px'}}>Episódio 1</h2>
    <a className='Button'>Ler Agora</a>
    </div>
    <p style={{marginLeft:'32px',opacity: '0.7'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra placerat efficitur. Praesent volutpat  </p>
    <MiniDetail />
    <br />
    <div style={{display: 'flex',justifyContent: 'space-evenly',gap: '12px'}}>
    <h2 style={{fontWeight: 'normal',marginLeft:'32px'}}>Episódio 2</h2>
    <a className='Button'>Ler Agora</a>
    </div>
    <p style={{marginLeft:'32px',opacity: '0.7'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra placerat efficitur. Praesent volutpat  </p>
    <MiniDetail />
    <br />
    <div style={{display: 'flex',justifyContent: 'space-evenly',gap: '12px'}}>
    <h2 style={{fontWeight: 'normal',marginLeft:'32px'}}>Episódio 3</h2>
    <a className='Button'>Ler Agora</a>
    </div>
    <p style={{marginLeft:'32px',opacity: '0.7'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra placerat efficitur. Praesent volutpat  </p>
    <MiniDetail />
    <br />
    <div style={{display: 'flex',justifyContent: 'space-evenly',gap: '12px'}}>
    <h2 style={{fontWeight: 'normal',marginLeft:'32px'}}>Episódio 4</h2>
    <a className='Button'>Ler Agora</a>
    </div>
    <p style={{marginLeft:'32px',opacity: '0.7'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra placerat efficitur. Praesent volutpat  </p>
    <MiniDetail />


    </div>
  )
}


export default PageHist