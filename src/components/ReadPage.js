import React from 'react'
import txt from './txt/S_CIEC.txt'
const readPage = () => {
    function httpGet(theUrl)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        console.log(xmlHttp.response)
        return xmlHttp.responseText;
    }
    httpGet(txt)
  return (
    <div>{httpGet(txt)}</div>
  )
}

export default readPage