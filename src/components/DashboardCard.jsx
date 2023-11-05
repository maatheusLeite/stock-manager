import PropTypes from 'prop-types'

DashboardCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number
}

export default function DashboardCard({ title, value }) {


    return (
        <div className='dashboard-card bg-dark py-3 px-4 rounded-2 shadow'>
            <h3 className='fs-6 fw-normal justfg'> {title} </h3>
            <h4 className='fs-1 fw-medium text-center p-3'> {value} </h4>
        </div>
    )
}
