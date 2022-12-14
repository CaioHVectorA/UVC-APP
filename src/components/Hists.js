import { LeiaAgora, Series, Solos } from "./Backend"
import { NavLink } from "react-router-dom"
const Div = (nome,local,tipo,desc,img) => {
  var nometoLink = nome.replaceAll(' ','')
  // const imglink = 'url('+img+')'
  function onLink() {
    localStorage.setItem('UVC_Desc',desc)
    localStorage.setItem('PagAnterior',window.location.pathname)
  }
  return (
<a key={nome} href={'paghist'+tipo+ nome} onClick={onLink}><div className={`slide ${nome}`}></div></a>
)
}

const Hists = (props) => {
  let Sample;
  if (props.tipo === 'comece') {
      Sample = LeiaAgora
  } else if (props.tipo === 'series') {
    Sample = Series
  } else if (props.tipo === 'solos') {
    Sample = Solos
  }
        return (
            <div className="slider">
            {Sample.map(({nome,local,tipo,descricao,img}) => (
              Div(nome,local,tipo,descricao,img)
            ))}
          </div>

)}

export default Hists;