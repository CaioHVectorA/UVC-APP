import React from 'react'

const Error = () => {
  return (
    <div style={{display: 'grid',placeItems: 'center',padding: '40px 60px'}}>
        <h1><nobr>Ocorreu um erro</nobr></h1>
        <p style={{textAlign: 'center'}}>Você pode ter tentado acessar uma página inexistente,uma história que ainda não existe ou acessado uma URL incomum.
        Caso não seja um dos problemas acima,considere reportas seu erro.</p>
        <br />
        <a className='Button' href='/'>Voltar a tela Inicial</a>
        </div>
  )     
}

export default Error