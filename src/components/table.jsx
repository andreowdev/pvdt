import "./styles/table.css"

export default function Table() {

    const produtos = JSON.parse(localStorage.getItem("produtos"))

    console.log(produtos)


    console.log(produtos)
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>STATUS</th>
                        <th>PRODUTO</th>
                        <th>ID</th>
                        <th>PREÇO</th>
                        <th>QUANTIDADE</th>

                    </tr>
                </thead>
                <tbody>
                {produtos.map((produto, index) => (
                        <tr key={index}>
                            <td>{produto.status == 1 ? "EM ESTOQUE" : "SEM ESTOQUE"}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.id}</td>
                            <td>{produto.valor}</td>
                            <td>{produto.quantidade} unidades</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )    
}