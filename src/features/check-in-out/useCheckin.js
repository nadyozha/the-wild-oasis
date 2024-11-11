import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCheckin() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
		mutationFn: ({ bookingId, breakfast }) => updateBooking(bookingId, {
			status: 'checked-in',
			isPaid: true,
			...breakfast,
		}),



		onSuccess: (data) => {
			toast.success(`Booking #${data.id} successfully checked in`);
			// Обновляем кеш для данных бронирования
			queryClient.invalidateQueries({
				queryKey: ['bookings'],
				active: true,
			});
			navigate('/dashboard');
		},



		onError: () => toast.error('There was an error while checking in'),
	});

	return { checkin, isCheckingIn }
}
