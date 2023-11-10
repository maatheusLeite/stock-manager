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

            {items.map((item) => (
                    <ItemCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        urlShow={`/items/${item.id}`}
                        urlUpdate={`/items/${item.id}/update`}
                    />
                )
            )}
        </>
    )
}
