import React from 'react'
import { Series, Solos } from './Backend'
import { FavSlots } from './BackendEPS'
import Detail from './Detail'
import Header from './Header'

const Favorites = () => {
    if (localStorage.UVC_FAV1 !==  'undefined') {
        FavSlots[0][0] = localStorage.UVC_FAV1
    } else {
        FavSlots[0] = ['Espaço Vazio']
        FavSlots[0].tipo = null
        FavSlots[0].order = 1
    }
    if (localStorage.UVC_FAV2 !==  'undefined') {
        FavSlots[1][0] = localStorage.UVC_FAV2
    } else {
        FavSlots[1] = ['Espaço Vazio']
        FavSlots[1].tipo = null
        FavSlots[1].order = 1
    }
    if (localStorage.UVC_FAV3 !==  'undefined') {
        FavSlots[2][0] = localStorage.UVC_FAV3
    } else {
        FavSlots[2] = ['Espaço Vazio']
        FavSlots[2].tipo = null
        FavSlots[2].order = 1
    }
    if (localStorage.UVC_FAV4 !==  'undefined') {
        FavSlots[3][0] = localStorage.UVC_FAV4
    } 
    else {
        FavSlots[3] = ['Espaço Vazio']
        FavSlots[3].tipo = null
        FavSlots[3].order = 1
    }
    if (localStorage.UVC_FAV5 !==  'undefined') {
        FavSlots[4][0] = localStorage.UVC_FAV5
    }
    else {
        FavSlots[4] = ['Espaço Vazio']
        FavSlots[4].tipo = null
        FavSlots[4].order = 1
    }
    for (let index = 0; index < Series.length; index++) {
        FavSlots.forEach(FavSlot => {
            if (FavSlot[0] === Series[index].nome || FavSlot[0].startsWith('Deroo')) {
                FavSlot.tipo = 'paghistSERIES'+Series[index].nome
                FavSlot.order = 0
            }
        });
    }
    for (let index = 0; index < Solos.length; index++) {
        FavSlots.forEach(FavSlot => {
            if (FavSlot[0] === Solos[index].nome) {
                FavSlot.tipo = 'paghistSOLOS'+Solos[index].nome
                FavSlot.order = 0
            }
        });
    }

    

    


        return <div>
            <Header Nome="Favoritos" />
            <br />
            <div style={{display: 'flex',flexDirection: 'column',placeItems: 'center',gap: '50px'}}>
            <h2><nobr>Suas Histórias Favoritadas</nobr></h2>
            { FavSlots.map( (FavSlot) => 
            <div style={{order:FavSlot.order}}>
                <h2>{FavSlot}</h2>
            <a href={FavSlot.tipo} style={{display: 'flex',flex: '1',order:(FavSlot.order)}}><div style={{width: '200px',height: '180px',borderRadius: '25px',margin: '0 auto',order:(FavSlot.order)}} className={FavSlot}></div></a>
            <br />
            <br />
            <Detail />
            </div>) }
        </div>
        </div>
}

export default Favorites