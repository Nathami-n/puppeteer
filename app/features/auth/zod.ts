import * as z from "zod";

export const signUpSchema = z
	.object({
		email: z.email(),
		password: z
			.string()
			.min(6, "Password must be at least 6 characters")
			.refine((value) => {
				const regex =
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
				return regex.test(value);
			}, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
		confirmPassword: z
			.string()
			.min(6, "Password must be at least 6 characters")
			.refine((value) => {
				const regex =
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
				return regex.test(value);
			}, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export const loginSchema = z.object({
	email: z.email(),
	password: z
		.string()
		.min(6, "Password must be at least 6 characters")
		.refine((value) => {
			const regex =
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
			return regex.test(value);
		}, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
});

export type SignupUserPayload = z.infer<typeof signUpSchema>;
export type LoginUserPayload = z.infer<typeof loginSchema>;
