import { LeiaAgora, Series, Solos } from "./Backend"


const Div = (nome,local,tipo,desc,img) => {
  // const imglink = 'url('+img+')'
  return (
<div className={`slide ${nome}`}></div>
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