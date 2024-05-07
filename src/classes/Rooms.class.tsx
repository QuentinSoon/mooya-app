import { z } from 'zod';
import { StructureSchema } from './Structure.class';
import { UserSchema } from './User.class';

export const RoomsSchema = z.object({
	id: z.string().uuid(),
	created_at: z.string(),
	title: z.string().nullable(),
	description: z.string().nullable(),
	picture1: z.string().nullable(),
	picture2: z.string().nullable(),
	picture3: z.string().nullable(),
	privacy: z
		.object({
			id: z.string().uuid(),
			title: z.string(),
			created_at: z.string(),
		})
		.nullable(),

	structure: z.array(StructureSchema).nullable(),
	property: z
		.object({
			id: z.string().uuid(),
			title: z.string(),
			created_at: z.string(),
		})
		.nullable(),
	rooms: z.number().nullable(),
	bedrooms: z.number().nullable(),
	surface: z.number().nullable(),
	location: z.array(z.number()).nullable(),
	owner: UserSchema,
});
export type RoomsType = z.infer<typeof RoomsSchema>;
