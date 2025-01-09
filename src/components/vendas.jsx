import { useState } from 'react';
import "./styles/vendas.css";
import TableVendas from './tableVendas';

export default function Vendas() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const [produtoSelecionado, setProdutoSelecionado] = useState('');
    const [setValorTotal] = useState(0);
    const [carrinho, setCarrinho] = useState([]);
    const [vendas, setVendas] = useState(JSON.parse(localStorage.getItem('vendas')) || []);

    const handleProdutoChange = (event) => {
        const produtoNome = event.target.value;
        setProdutoSelecionado(produtoNome);
        const produto = produtos.find(p => p.nome === produtoNome);
        setValorTotal(produto ? parseFloat(produto.valor) : 0);
    };

    const handleAdicionarAoCarrinho = () => {
        const produto = produtos.find(p => p.nome === produtoSelecionado);
        if (produto) {
            setCarrinho([...carrinho, produto]);
        }
    };

    const calcularValorTotal = () => {
        return carrinho.reduce((total, produto) => total + parseFloat(produto.valor), 0);
    };

    const atualizarEstoque = () => {
        const produtosAtualizados = produtos.map(produto => {
            const produtoNoCarrinho = carrinho.find(p => p.nome === produto.nome);
            if (produtoNoCarrinho) {
                return {
                    ...produto,
                    quantidade: produto.quantidade - 1 
                };
            }
            return produto;
        });
        localStorage.setItem('produtos', JSON.stringify(produtosAtualizados));
    };

    const handleFinalizarVenda = () => {
        const vendasAnteriores = JSON.parse(localStorage.getItem('vendas')) || [];
        const novaVenda = {
            produtos: carrinho,
            valorTotal: calcularValorTotal(),
            data: new Date().toISOString()
        };
        const vendasAtualizadas = [...vendasAnteriores, novaVenda];
        localStorage.setItem('vendas', JSON.stringify(vendasAtualizadas));
        setVendas(vendasAtualizadas);
        atualizarEstoque(); // Atualiza o estoque após finalizar a venda
        setCarrinho([]); // Limpa o carrinho após finalizar a venda
    };

    return (
        <div>
            <h1>VENDAS</h1>
            <div>
                <label htmlFor="produto">Escolha um produto:</label>
                <select id="produto" value={produtoSelecionado} onChange={handleProdutoChange}>
                    <option value="">Selecione um produto</option>
                    {produtos.map((produto) => (
                        <option key={produto.id} value={produto.nome}>
                            {produto.nome}
                        </option>
                    ))}
                </select>
                <div className="button-container">
                    <button onClick={handleAdicionarAoCarrinho}>Adicionar ao Carrinho</button>
                    <button onClick={handleFinalizarVenda}>Finalizar Venda</button>
                </div>
            </div>
            {carrinho.length > 0 && (
                <div className="carrinho">
                    <h2>Carrinho de Compras</h2>
                    <ul>
                        {carrinho.map((produto, index) => (
                            <li key={index}>{produto.nome} - R$ {parseFloat(produto.valor).toFixed(2)}</li>
                        ))}
                    </ul>
                    <p>Valor Total: R$ {calcularValorTotal().toFixed(2)}</p>
                </div>
            )}
            <TableVendas vendas={vendas} />
        </div>
    );
}