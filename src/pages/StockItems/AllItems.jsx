import ItemCard from "../../components/ItemCard";
import useStock from "../../hooks/useStock.js"

export default function AllItems() {
    const { items } = useStock()

    return (
        <>
            <div className="row bg-dark shadow p-4">
                <span className="col-4 fw-bold"> ID </span>
                <span className="col-2 fw-bold"> Nome </span>
                <span className="col-1 fw-bold"> Em Estoque </span>
                <span className="col-2 fw-bold"> Categoria </span>
                <span className="col-3 fw-bold px-3"> Ações </span>
            </div>

            {
                items.map((item) => {
                    <ItemCard 
                        key={item.id} 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} 
                    />
                })
            }

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
