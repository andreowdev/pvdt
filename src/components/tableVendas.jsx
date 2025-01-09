import PropTypes from 'prop-types';
import "./styles/tableVendas.css";

export default function TableVendas({ vendas }) {
    return (
        <div className="container">
            <h1>Histórico de Vendas</h1>
            <table className="table-vendas">
                <thead>
                    <tr>
                        <th>DATA DA VENDA</th>
                        <th>VENDA</th>
                        <th>VALOR TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {vendas.map((venda, index) => (
                        <tr key={index}>
                            <td>{new Date(venda.data).toLocaleDateString()}</td>
                            <td>
                                {venda.produtos.map((produto, i) => (
                                    <div key={produto.id || i}>{produto.nome}</div>
                                ))}
                            </td>
                            <td>R$ {venda.valorTotal ? venda.valorTotal.toFixed(2) : '0.00'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => window.print()}>Imprimir</button>
        </div>
    );
}

TableVendas.propTypes = {
    vendas: PropTypes.arrayOf(
        PropTypes.shape({
            data: PropTypes.string.isRequired,
            produtos: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                    nome: PropTypes.string.isRequired,
                    valor: PropTypes.string.isRequired,
                })
            ).isRequired,
            valorTotal: PropTypes.number.isRequired,
        })
    ).isRequired,
};