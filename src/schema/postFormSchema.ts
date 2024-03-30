import { z } from 'zod';
import { validateFileResolution } from '@/utils';

export const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg'];
const phoneRegex = /^\+380\d{9}$/;
const emailRegex =
	// eslint-disable-next-line no-control-regex
	/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x09\x0b-\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b-\x0c\x0e-\x7f])+")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2}|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x09\x0b-\x0c\x0e-\x1f\x21-\x7f]|\\[\x01-\x09\x0b-\x0c\x0e-\x7f])+)])$/i;

const postFormSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, 'Minimum length 2 characters!')
		.max(60, 'The length should not exceed 60 characters!'),
	email: z
		.string()
		.trim()
		.min(2, 'Minimum length 2 characters!')
		.max(100, 'The length should not exceed 100 characters!')
		.regex(emailRegex, 'Invalid email!'),
	phone: z.string().trim().regex(phoneRegex, 'Incorrect phone number!'),
	positionId: z.coerce.number().min(1, 'Required field!'),
	photo: z
		.instanceof(File, { message: 'Photo is required!' })
		.refine(
			file => validateFileResolution(file),
			'The photo is too big!. Allowable size 70x70'
		)
		.refine(file => file.size <= MAX_FILE_SIZE, 'Max photo size is 5MB!')
		.refine(
			file => ACCEPTED_IMAGE_TYPES.includes(file.type),
			'Only .jpg, .jpeg, formats are supported!'
		)
});

export default postFormSchema;
