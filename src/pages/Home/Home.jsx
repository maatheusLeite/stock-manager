import DashboardCard from "../../components/DashboardCard";
import RecentItems from "../../components/RecentItems";
import ItemsRunningOut from "../../components/ItemsRunningOut";
import useStock from "../../hooks/useStock.js";

export default function Home() {
    const { items } = useStock()

    const diversity = items.length
    const inventory = items.reduce((sum, item) => Number(sum) + Number(item.quantity), 0)

    const today = new Date()
    const limitDate = new Date()
    limitDate.setDate(limitDate.getDate() - 10)

    const recentItems = items.filter((item) => item.createdAt >= limitDate && item.createdAt <= today)
    const recentTotal = recentItems.length

    const lowQuantityItems = items.filter((item) => item.quantity < 10)
    const lowQuantityTotal = lowQuantityItems.length

    return (
        <div className="px-5">
            <h2 className="fw-light mb-5"> Dashboard </h2>

            <div className="container-fluid">
                <div className="row gap-5">
                    <DashboardCard title='Diversidade de items' value={diversity} />
                    <DashboardCard title='Inventário total' value={inventory} />
                    <DashboardCard title='Items recentes' value={recentTotal} />
                    <DashboardCard title='Items acabando' value={lowQuantityTotal} />
                </div>

                <div className="row gap-5 my-5">
                    <RecentItems recentItems={recentItems} />
                    <ItemsRunningOut itemsRunningOut={lowQuantityItems} />
                </div>
            </div>
        </div>
    )
}
