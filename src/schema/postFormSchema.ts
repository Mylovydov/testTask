import { z } from 'zod';
import { validateFileResolution } from '@/utils';

export const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg'];

const postFormSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, 'Minimum length 2 characters!')
		.max(60, 'The length should not exceed 60 characters!'),
	email: z.string().trim().email('Invalid email!'),
	phone: z
		.string()
		.trim()
		.regex(/^\+380/, 'Incorrect phone number!'),
	positionId: z.coerce.number().min(1, 'Required field!'),
	photo: z
		.instanceof(FileList, { message: 'Photo is required!' })
		.refine(
			file => validateFileResolution(file[0]),
			'The photo is too big. Allowable size 70x70'
		)
		.refine(file => file[0].size <= MAX_FILE_SIZE, 'Max photo size is 5MB.')
		.refine(
			file => ACCEPTED_IMAGE_TYPES.includes(file[0].type),
			'Only .jpg, .jpeg, formats are supported!'
		)
});

export default postFormSchema;
