import React from 'react'
import { Series, Solos } from './Backend'
import { FavSlots } from './BackendEPS'
import Detail from './Detail'
import Header from './Header'

const Favorites = () => {
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
    for (let index = 0; index < Series.length; index++) {
        FavSlots.forEach(FavSlot => {
            if (FavSlot[0] === Series[index].nome || FavSlot[0].startsWith('Deroo')) {
                FavSlot.tipo = 'SERIES'
            }
        });
    }
    for (let index = 0; index < Solos.length; index++) {
        FavSlots.forEach(FavSlot => {
            if (FavSlot[0] === Solos[index].nome) {
                FavSlot.tipo = 'SOLOS'
            }
        });
    }

    

    


        return <div>
            <Header Nome="Favoritos" />
            <br />
            <div style={{display: 'grid',placeItems: 'center',gap: '50px'}}>
            <h2><nobr>Suas Histórias Favoritadas</nobr></h2>
            { FavSlots.map( (FavSlot) => 
            
            <div>
                <h2>{FavSlot}</h2>
            <a href={'paghist'+FavSlot.tipo+FavSlot}><div style={{width: '200px',height: '180px',borderRadius: '25px',margin: '0 auto'}} className={FavSlot}></div></a>
            <br />
            <br />
            <Detail />
            </div>) }
        </div>
        </div>
}

export default Favorites