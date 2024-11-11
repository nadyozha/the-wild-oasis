import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

export default function CabinTable() {
	const [searchParams] = useSearchParams();
	const { isLoading, cabins } = useCabins();

	//1) FILTER
	const filterValues = searchParams.get('discount') || 'all';

	const filteredCabins = cabins?.length
		? cabins.filter(item => {
			if (filterValues === 'no-discount') return item.discount === 0;
			if (filterValues === 'with-discount') return item.discount > 0;
			return true; // Значение 'all' вернет все кабины
		})
		: [];

	//1) SORT BY
	const sortBy = searchParams.get('sortBy') || 'startDate-asc';
	const [field, direction] = sortBy.split('-');
	const modifier = direction === 'asc' ? 1 : -1;
	const sortedCabins = filteredCabins.sort(
		(a, b) => (a[field] - b[field]) * modifier
	);

	if (isLoading) return <Spinner />
	if (!sortedCabins.length) return <Empty resource='cabins' />


	return (
		<Menus>
			<Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
				<Table.Header>
					<div></div>
					<div>Canin</div>
					<div>Capacity</div>
					<div>Price</div>
					<div>Discount</div>
					<div></div>
				</Table.Header>
				<Table.Body
					data={sortedCabins}
					render={(cabin => <CabinRow cabin={cabin} key={cabin.id} />)} />
			</Table>
		</Menus>

	)
}
