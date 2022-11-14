import React from 'react'
import Detail from './Detail'
import Header from './Header'
import AllHists from './Backend'
import Hists from './Hists'
import { Series } from './Backend'
import { Solos } from './Backend'
import { LeiaAgora } from './Backend'
import PageHist from './PageHistSERIE'
import { FavSlots } from './BackendEPS'

const Home = () => {
  return (
    <div style={{paddingBottom: '150px'}}>
        <Header Nome="Home"/>
    <section>
        <br></br>
        <h1 className='title'>Bem Vindo ao UVC!</h1>
        <Detail />
        <h3 className='subtitle'>Veja os Contos mais requisitos</h3>
        <br></br>
        <div style={{width:'100%',height:'460px',display: 'grid',placeItems: 'center',paddingBottom: '50px'}} className="gradient">
            <h1 className='subtitle' style={{fontSize:'32px'}}>Conto do Mês</h1>
            <div className='Guardiões' style={{width:'80%',height:'200px',backgroundColor: '#e7e7e7e7',margin: '0 auto',borderRadius: '25px',backgroundSize: '80%'}}></div>
            <p style={{margin: '0 auto',textAlign:'center',maxWidth: '320px',marginTop:'12px'}}>Conheça a rotina de uma família,que após grandes dificuldades,conseguiram superpoderes incríveis;Apesar disso,eles não perderam seu lado humano,e terão grandiosas dificuldades em seu caminho.</p>
            <a className='Button' style={{margin: '0 auto'}} href={'paghistSERIESGuardiões'}>Acesse Agora</a>
        </div>
        <br></br>
        <div>
        <h1 style={{marginLeft: '12px',fontWeight: 'normal'}}>Comece a Ler Agora</h1>
        <p style={{marginLeft: '12px'}}>Histórias simples,curtas e interessantes.</p>
        </div>
        <br></br>
            <Hists tipo='comece' />
        <div>
            <br></br>
        <h1 style={{marginLeft: '12px',fontWeight: 'normal'}}>Series Disponíveis</h1>
        <p style={{marginLeft: '12px'}}>Histórias divididas em episódios.</p>
        </div>
        <br></br>
        <Hists tipo='series' />
        <div>
            <br></br>
        <h1 style={{marginLeft: '12px',fontWeight: 'normal'}}>Solos Disponíveis</h1>
        <p style={{marginLeft: '12px'}}>Histórias contadas de forma singular e dinâmica,normalmente pra aprofundar personagens específicos.</p>
        </div>
        <br></br>
        <Hists tipo='solos' />
    </section>
    </div>
  )
}

export default Home