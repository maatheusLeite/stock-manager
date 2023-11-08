import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard";

export default function AllItems() {
    return (
        <>
            <div className="border-bottom border-light mb-5 py-3">
                <Link to='/stock' className="border-bottom border-3 border-light p-3"> Todos os items </Link>
                <Link to='new' className="mx-5 p-3"> Novo item </Link>
            </div>

            <div className="row bg-dark shadow p-4">
                <span className="col-4 fw-bold"> ID </span>
                <span className="col-2 fw-bold"> Nome </span>
                <span className="col-1 fw-bold"> Em Estoque </span>
                <span className="col-2 fw-bold"> Categoria </span>
                <span className="col-3 fw-bold px-3"> Ações </span>
            </div>

            <ItemCard
                id='b37f114e-69e0-4517-9fad-a46168d37350'
                title='7 Wonders'
                qtd={8}
                category='Jogos'
            />

            <ItemCard
                id='4852a76f-cda0-4941-8236-cdf607515ce8'
                title='O Senhor dos Anéis'
                qtd={32}
                category='Livros'
            />
        </>
    )
}
