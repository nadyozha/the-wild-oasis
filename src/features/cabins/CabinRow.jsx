import { Img, Cabin, Price, Discount } from './StyledCabinRow';

import { formatCurrency } from '../../utils/helpers';
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from './useDeleteCabin';
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from '../../ui/ConfirmDelete';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';

function CabinRow({ cabin }) {
	const { isDeleting, deleteCabine } = useDeleteCabin();
	const { image, discount, id: cabinID, maxCapacity, regularPrice, name, description } = cabin;
	const { createCabin, isCreating } = useCreateCabin();

	function handleDuplicate() {
		createCabin({
			name: `Copy of ${name}`,
			image,
			discount,
			maxCapacity,
			regularPrice,
			description,
		})
	}

	return (
		<Table.Row>
			<Img src={image} />
			<Cabin>{name}</Cabin>
			<div>Fits up to {maxCapacity} guests</div>
			<Price>{formatCurrency(regularPrice)}</Price>
			{discount ? <Discount>{formatCurrency(discount)}</Discount> : <span>&mdash;</span>}
			<div>

				<Modal>
					<Menus.Menu>
						<Menus.Toggle id={cabinID} />

						<Menus.List id={cabinID}>
							<Menus.Button
								icon={<HiSquare2Stack />}
								onClick={handleDuplicate}
								disabled={isCreating}
							>Duplicate
							</Menus.Button>

							<Modal.Open opens='edit'>
								<Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
							</Modal.Open>

							<Modal.Open opens='delete'>
								<Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
							</Modal.Open>
						</Menus.List>

						<Modal.Window name='edit'>
							<CreateCabinForm cabinToEdit={cabin} />
						</Modal.Window>

						<Modal.Window name='delete'>
							<ConfirmDelete
								resourceName='cabins'
								disabled={isDeleting}
								onConfirm={() => deleteCabine(cabinID)} />
						</Modal.Window>

					</Menus.Menu>
				</Modal>



			</div>
		</Table.Row >
	)
}

export default CabinRow;
