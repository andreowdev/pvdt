import "./styles/table.css"

export default function Table() {

    const produtos = JSON.parse(localStorage.getItem("produtos"))

    const nome = produtos[0].nome;


    console.log(produtos)
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nome do Produto</th>
                        <th>Data de Entrada</th>
                        <th>Referência</th>
                        <th>Valor da Mensalidade</th>
                    </tr>
                </thead>
                <tbody>
                {produtos.map((produto, index) => (
                        <tr key={index}>
                            <td>{produto.status == 1 ? "Ativo" : "Desativado"}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.dataEntrada}</td>
                            <td>{produto.valorMensalidade}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )    
}