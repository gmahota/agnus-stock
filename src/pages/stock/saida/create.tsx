import React from 'react'

export default function InventoryCreate() {
  return (
    <>
      <form id="topo">
        <h1 className="center">Entrada de Estoque</h1>

        <div className="espaco">
          <div className="rotulos">Data:</div>
          <input
            className="boxcolor"
            id="data"
            type="time"
            name="nome"
            placeholder=" Data de Deposito"
          />
        </div>

        <div className="espaco">
          <div className="rotulos">Codigo :</div>
          <input
            className="boxcolor"
            id="Contacto"
            type="text"
            name="codigo"
            placeholder="o codigo do produto"
          />
        </div>
        <div className="espaco">
          <div className="rotulos"> Produto:</div>
          <input
            className="boxcolor"
            id="product"
            name="product"
            placeholder=" nome produto"
          />
        </div>

        <div className="espaco">
          <div className="rotulos">Quantidade:</div>
          <input
            className="boxcolor"
            id="Quantidade"
            type="text"
            name="Quantidade"
            placeholder=" Quantidade do Produto"
          />
        </div>
        <div className="espaco">
          <div className="rotulos"> Valor:</div>
          <input
            className="boxcolor"
            id="Valor"
            type="Type"
            name="valor"
            placeholder=" O valor em meticais"
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}
