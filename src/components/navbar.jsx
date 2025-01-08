import "./styles/navbar.css"


export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="title">Sistema PVD</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/produtos">Produtos</a></li>
                <li><a href="/clientes">Clientes</a></li>
                <li><a href="/vendas">Vendas</a></li>
            </ul>
        </nav>
    )
}