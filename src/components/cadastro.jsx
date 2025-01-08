import { useState } from "react";
import "./styles/cadastro.css";
import Table from "./table";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [referencia, setReferencia] = useState("");
  const [valor, setValor] = useState("");
  const [status, setStatus] = useState(1);
  const [quantidade, setQuantidade] = useState(0);

  const getNextId = () => {
    const lastId = parseInt(localStorage.getItem("lastId") || "0", 10);
    const nextId = lastId + 1;
    localStorage.setItem("lastId", nextId.toString());
    return nextId;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoProduto = {
      id: getNextId(),
      status,
      nome,
      referencia,
      valor,
      quantidade
    };

    const produtosExistentes =
      JSON.parse(localStorage.getItem("produtos")) || [];

    const novosProdutos = [...produtosExistentes, novoProduto];

    localStorage.setItem("produtos", JSON.stringify(novosProdutos));

    setStatus(1);
    setNome("");
    setReferencia("");
    setValor("");
    setQuantidade(0);

    alert("Produto salvo no localStorage!");
  };

  return (
    <div className="flex">
      <h1 className="">Cadastro de Produtos</h1>
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
          <label className="">PREÇO</label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
            placeholder="Digite o valor da mensalidade"
            className=""
          />
        </div>
        <div>
          <label className="">Quantidade</label>
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            required
            placeholder="Digite a quantidade"
            className=""
          />
        </div>
        <div className="">
          <button type="submit" className="">
            Salvar
          </button>
        </div>
      </form>
      <Table />
    </div>
  );
}