import { imageSizeSchema } from '@/schema';

const validateFileResolution = (file: File) =>
	new Promise((resolve, reject) => {
		const img = new Image();
		img.src = URL.createObjectURL(file);
		img.onerror = function () {
			reject(false);
		};

		img.onload = function () {
			const imageSize = {
				width: img.width,
				height: img.height
			};
			const result = imageSizeSchema.safeParse(imageSize);
			resolve(result.success);
		};

		img.src = URL.createObjectURL(file);
	});

export default validateFileResolution;
