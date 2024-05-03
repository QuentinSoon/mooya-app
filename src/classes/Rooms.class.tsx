import { z } from 'zod';
import { UserSchema } from './User.class';

export const RoomsSchema = z.object({
	id: z.string().uuid(),
	created_at: z.string(),
	title: z.string(),
	description: z.string(),
	picture1: z.string().nullable(),
	picture2: z.string().nullable(),
	picture3: z.string().nullable(),
	privacy: z.object({
		id: z.string().uuid(),
		title: z.string(),
		created_at: z.string(),
	}),
	structure: z.object({
		id: z.string().uuid(),
		title: z.string(),
		created_at: z.string(),
	}),
	property: z.object({
		id: z.string().uuid(),
		title: z.string(),
		created_at: z.string(),
	}),
	rooms: z.number(),
	bedrooms: z.number(),
	surface: z.number(),
	location: z.array(z.number()),
	owner: UserSchema,
});
export type RoomsType = z.infer<typeof RoomsSchema>;
