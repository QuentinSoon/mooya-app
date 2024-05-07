import { z } from 'zod';

export const StructureSchema = z.array(
	z.object({
		id: z.string().uuid(),
		title: z.string(),
		icon: z.string(),
		created_at: z.string(),
	})
);

export type StructureType = z.infer<typeof StructureSchema>;
