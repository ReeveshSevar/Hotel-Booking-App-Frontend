import React from "react"
import { Link } from "react-router-dom"

const Admin = () => {
	return (
		<section className="container mt-5">
			<h2 style={{color:'#109be6',textAlign:'center'}}>Welcome to Admin Panel</h2>
			<hr style={{color:'red'}} />
			<div className="flex-shrink-0 mt-3">
				<Link to={"/existing-rooms"} className="btn btn-sm" style={{background:'#05f0b9'}}>
					Manage Rooms
				</Link> <br />
			</div>
			<div className="flex-shrink-0 mt-3">
				<Link to={"/existing-bookings"}  className="btn btn-sm" style={{background:'#05f0b9'}}>Manage Bookings</Link>
			</div>
		</section>
	)
}

export default Admin
