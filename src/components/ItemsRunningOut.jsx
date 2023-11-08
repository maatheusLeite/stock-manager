import ItemRunningOut from "./ItemRunningOut";

export default function ItemsRunningOut() {
    return (
        <div className="col">
            <div className="row bg-dark shadow p-4">
                <span className="col-6 fw-bold"> Items Acabando </span>
                <span className="col fw-bold"> Qtd. </span>
                <span className="col fw-bold px-3"> Ações </span>
            </div>

            <ItemRunningOut title='7 Wonders' qtd={8} url='teste3'/>
        </div>
    )
}
