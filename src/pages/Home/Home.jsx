import DashboardCard from "../../components/DashboardCard";

export default function Home() {
    return (
        <div className="px-5">
            <h2 className="fw-light"> Dashboard </h2>

            <div className="d-flex justify-content-around">
                <DashboardCard title='Diversidade de items' value={2}/>
                <DashboardCard title='Diversidade de items' value={2}/>
                <DashboardCard title='Diversidade de items' value={2}/>
                <DashboardCard title='Diversidade de items' value={2}/>
            </div>
        </div>
    )
}
