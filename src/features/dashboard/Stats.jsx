import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
	//1. Number of bookings
	const numBookings = bookings.length;

	//2. Total Sales Statistics
	const sales = bookings.reduce((acc, item) => acc + item.totalPrice, 0);

	//3. Total check-ins
	const checkins = confirmedStays.length;

	//4. Occupancy rate
	const occupation = confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays * cabinCount)
	//num checked in nights / all available nights (num days * nam cabins)




	return (
		<>
			<Stat
				title='Bookings'
				color='blue'
				icon={<HiOutlineBriefcase />}
				value={numBookings} />
			<Stat
				title='Sales'
				color='green'
				icon={<HiOutlineBanknotes />}
				value={formatCurrency(sales)} />
			<Stat
				title='Check ins'
				color='indigo'
				icon={<HiOutlineCalendarDays />}
				value={checkins} />
			<Stat
				title='Occupancy rate'
				color='yellow'
				icon={<HiOutlineChartBar />}
				value={Math.round(occupation * 100) + '%'} />
		</>
	)
}

export default Stats;
