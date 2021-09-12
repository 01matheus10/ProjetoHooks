import './UseContext.css'
import React, { useContext } from "react"

import { AppContexto } from '../../data/Store'

const UseContext = props => {

    const {contextoNome, setContextoNome} = useContext(AppContexto)
    const {contextoSenha, setContextoSenha} = useContext(AppContexto)

    return(
        <div>
            <div className='titulo'>
                <h1>useContext</h1>
                <h2>Aceita um objeto de contexto e retorna o valor atual do contexto</h2>
            </div>

            <div className="conteudo">

                <label className="campo">Acesso encapsulado ao contexto (Store)</label>
                <p className="mensagem">Nome: {contextoNome}</p>
                <p className="mensagem">Senha: {contextoSenha}</p>
                
            </div>
        </div>
    )
}

export default UseContext