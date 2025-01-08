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
                    <div className="title">PRODUTOS DISPONIVEIS</div>
                    <Table />
                </div>
                <div className="">
                    <button>CADASTRO DE PRODUTOS</button>
                    <button>VENDER</button>
                </div>
            </div>
        </div>
    );
}