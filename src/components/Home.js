import React from 'react'
import Detail from './Detail'
import Header from './Header'

const Home = () => {
  return (
    <div>
        <Header Nome="Home"/>
    <section>
        <br></br>
        <h1 className='title'>Bem Vindo ao UVC!</h1>
        <Detail />
        <h3 className='subtitle'>Veja os Contos mais requisitos</h3>
        <br></br>
        <div style={{width:'100%',height:'390px'}} className="gradient">
            <h1 className='subtitle' style={{fontSize:'32px'}}>Conto do Mês</h1>
            <div style={{width:'80%',height:'200px',backgroundColor: '#e7e7e7e7',margin: '0 auto',borderRadius: '25px'}}></div>
            <p style={{margin: '0 auto',textAlign:'center',maxWidth: '80%',marginTop:'12px'}}>Os grandes heróis universais,que ajudam quaisquer uns sem pensar duas vezes,ganharam 6 episódios.O que está esperando? Se você preza pela justiça,paz e a liberdade,acompanhe-os!</p>
        </div>
        <br></br>
        <div>
        <h1 style={{marginLeft: '12px',fontWeight: 'normal'}}>Comece a Ler Agora</h1>
        <p style={{marginLeft: '12px'}}>Histórias simples,curtas e interessantes.</p>
        </div>
        <br></br>
        <div className='slider'>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
        </div>
        <div>
            <br></br>
        <h1 style={{marginLeft: '12px',fontWeight: 'normal'}}>Series Disponíveis</h1>
        <p style={{marginLeft: '12px'}}>Histórias divididas em episódios.</p>
        </div>
        <br></br>
        <div className='slider'>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
        </div>
    </section>
    </div>
  )
}

export default Home