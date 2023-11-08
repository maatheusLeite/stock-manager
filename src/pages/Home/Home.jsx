import DashboardCard from "../../components/DashboardCard";
import RecentItems from "../../components/RecentItems";
import ItemsRunningOut from "../../components/ItemsRunningOut";

export default function Home() {
    return (
        <div className="px-5">
            <h2 className="fw-light mb-5"> Dashboard </h2>

            <div className="container-fluid">
                <div className="row gap-5">
                    <DashboardCard title='Diversidade de items' value={2} />
                    <DashboardCard title='Diversidade de items' value={40} />
                    <DashboardCard title='Diversidade de items' value={2} />
                    <DashboardCard title='Diversidade de items' value={1} />
                </div>

                <div className="row gap-5 my-5">
                    <RecentItems />
                    <ItemsRunningOut />
                </div>
            </div>
        </div>
    )
}
