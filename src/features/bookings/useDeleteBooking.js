import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingAPI } from "../../services/apiBookings";
import toast from "react-hot-toast";

export default function useDeleteBooking() {
	const queryClient = useQueryClient();
	const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
		mutationFn: deleteBookingAPI,
		onSuccess: () => {
			toast.success('Booking successfully deleted');
			queryClient.invalidateQueries({
				queryKey: ['bookings'],
			});
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});

	return { isDeleting, deleteBooking };
}