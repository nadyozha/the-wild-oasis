import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import { Table, TableHeader } from './StyledCabinTable';


export default function CabinTable() {
	const { isLoading, cabins } = useCabins();

	if (isLoading) return <Spinner />

	return (
		<Table role="table">
			<TableHeader role="row">
				<div></div>
				<div>Canin</div>
				<div>Capacity</div>
				<div>Price</div>
				<div>Discount</div>
				<div></div>
			</TableHeader>
			{cabins.map(cabin => <CabinRow cabin={cabin} key={cabin.id} />)}
		</Table>
	)
}
