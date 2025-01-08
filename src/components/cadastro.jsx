import { useState } from "react";
import "./styles/cadastro.css"

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [dataEntrada, setDataEntrada] = useState("");
  const [referencia, setReferencia] = useState("");
  const [valorMensalidade, setValorMensalidade] = useState("");
  const [status, setStatus] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoProduto = {
      status,
      nome,
      dataEntrada,
      referencia,
      valorMensalidade,
    };

    const produtosExistentes =
      JSON.parse(localStorage.getItem("produtos")) || [];

    const novosProdutos = [...produtosExistentes, novoProduto];

    localStorage.setItem("produtos", JSON.stringify(novosProdutos));

    setStatus("");
    setNome("");
    setDataEntrada("");
    setReferencia("");
    setValorMensalidade("");

    alert("Produto salvo no localStorage!");
  };

  return (
    <div className="flex ">
      <div className="">
        <h1 className="">Cadastro de Clientes</h1>
        <form onSubmit={handleSubmit} className="">
          <div className="">
            <label className="">Nome do Produto</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              placeholder="Digite o nome do produto"
              className=""
            />
          </div>
          <div>
            <label className="">Data de Entrada</label>
            <input
              type="date"
              value={dataEntrada}
              onChange={(e) => setDataEntrada(e.target.value)}
              required
              className=""
            />
          </div>
          <div>
            <label className="">Referência</label>
            <input
              type="text"
              value={referencia}
              onChange={(e) => setReferencia(e.target.value)}
              required
              placeholder="Digite a referência"
              className=""
            />
          </div>
          <div className="">
            <label className="">Valor da Mensalidade</label>
            <input
              type="number"
              value={valorMensalidade}
              onChange={(e) => setValorMensalidade(e.target.value)}
              required
              placeholder="Digite o valor da mensalidade"
              className=""
            />
          </div>
          <div className="">
            <button type="submit" className="">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
