import { parseISO } from "date-fns"
import React, { useState, useEffect } from "react"
import DateSlider from "../common/DateSlider"

const BookingsTable = ({ bookingInfo, handleBookingCancellation }) => {
	const [filteredBookings, setFilteredBookings] = useState(bookingInfo)

	const filterBooknigs = (startDate, endDate) => {
		let filtered = bookingInfo
		if (startDate && endDate) {
			filtered = bookingInfo.filter((booking) => {
				const bookingStarDate = parseISO(booking.checkInDate)
				const bookingEndDate = parseISO(booking.checkOutDate)
				return (
					bookingStarDate >= startDate && bookingEndDate <= endDate && bookingEndDate > startDate
				)
			})
		}
		setFilteredBookings(filtered)
	}

	useEffect(() => {
		setFilteredBookings(bookingInfo)
	}, [bookingInfo])

	return (
		<section className="p-4">
			<DateSlider onDateChange={filterBooknigs} onFilterChange={filterBooknigs} />
			<table className="table table-bordered table-dark table-hover shadow" style={{fontSize:'12px', border:'#9169db'}}>
				<thead>
					<tr>						
						<th className="text-info">S/N</th>
						<th className="text-info">Booking ID</th>
						<th className="text-info">Room ID</th>
						<th className="text-info">Room Type</th>
						<th className="text-info">Check-In Date</th>
						<th className="text-info">Check-Out Date</th>
						<th className="text-info">Guest Name</th>
						<th className="text-info">Guest Email</th>
						<th className="text-info">Adults</th>
						<th className="text-info">Children</th>
						<th className="text-info">Total Guest</th>
						<th className="text-info">Confirmation Code</th>
						<th className="text-info" colSpan={2}>Actions</th>						
					</tr>
				</thead>
				<tbody className="text-center">
					{filteredBookings.map((booking, index) => (
						<tr key={booking.id}>
							<td className="text-info">{index + 1}</td>
							<td className="text-info">{booking.bookingId}</td>
							<td className="text-info">{booking.room.id}</td>
							<td className="text-info">{booking.room.roomType}</td>
							<td className="text-info">{booking.checkInDate}</td>
							<td className="text-info">{booking.checkOutDate}</td>
							<td className="text-info">{booking.guestFullName}</td>
							<td className="text-info">{booking.guestEmail}</td>
							<td className="text-info">{booking.numOfAdults}</td>
							<td className="text-info">{booking.numOfChildren}</td>
							<td className="text-info">{booking.totalNumOfGuest}</td>
							<td className="text-info">{booking.bookingConfirmationCode}</td>
							<td>
								<button
									className="btn btn-danger btn-sm text-info" style={{background:'black'}}
									onClick={() => handleBookingCancellation(booking.bookingId)}>
									Cancel
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{filterBooknigs.length === 0 && <p> No booking found for the selected dates</p>}
		</section>
	)
}

export default BookingsTable
