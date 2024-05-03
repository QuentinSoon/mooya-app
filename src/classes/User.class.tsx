import { z } from 'zod';

export const UserSchema = z.object({
	id: z.number(),
	created_at: z.string(),
	email: z.string().email(),
	firstname: z.string(),
	user_id: z.string().uuid(),
	avatar_url: z.string().url(),
});
export type UserType = z.infer<typeof UserSchema>;
