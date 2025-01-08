import Navbar from "./navbar";
import "./styles/home.css";
import Table from "./table";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="home">
                <h1>Bem vindo ao sistema PVD</h1>
                <div className="table-container">
                    <div className="title">TABELA DE PRODUTOS</div>
                    <Table />
                </div>
                <div className="other-content">
                    {/* Adicione aqui outros conteúdos que você deseja */}
                    <p>Outros conteúdos aqui...</p>
                </div>
            </div>
        </div>
    );
}