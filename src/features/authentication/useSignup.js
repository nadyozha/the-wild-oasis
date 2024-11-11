import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
	const { mutate: signUp, isLoading } = useMutation({
		mutationFn: signupAPI,
		onSuccess: () => {
			toast.success("Account succsessfully created! Please verify the new account from user's email address.");
		},
	});

	return { signUp, isLoading };
}
