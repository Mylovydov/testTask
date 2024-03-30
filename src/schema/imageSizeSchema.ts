import { z } from 'zod';

const imageSizeSchema = z.object({
	width: z.number().min(70),
	height: z.number().min(70)
});

export default imageSizeSchema;
