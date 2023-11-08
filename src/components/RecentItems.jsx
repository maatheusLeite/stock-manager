import RecentItem from "./RecentItem";

export default function RecentItems() {
    return (
        <div className="col">
            <div className="row bg-dark shadow p-4">
                <span className="col-8 fw-bold"> Items Recentes </span>
                <span className="col fw-bold px-3"> Ações </span>
            </div>

            <RecentItem title='7 Wonders' url='teste' />
            <RecentItem title='O Senhor dos Anéis' url='teste2' />
        </div>
    )
}
