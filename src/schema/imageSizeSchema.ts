import { z } from 'zod';

const imageSizeSchema = z.object({
	width: z.number().min(1).max(70),
	height: z.number().min(1).max(70)
});

export default imageSizeSchema;
