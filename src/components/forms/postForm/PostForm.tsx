import React, { FC } from 'react';
import styles from './postForm.module.scss';
import {
	Button,
	FileInput,
	Radio,
	RadioGroup,
	TextField,
	TPostFormProps,
	TPostFormValues
} from '@/components';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { postFormSchema } from '@/schema';

const PostForm: FC<TPostFormProps> = ({
	defaultValues,
	onSubmit,
	isLoading,
	options = []
}) => {
	const {
		formState: { errors },
		handleSubmit,
		register,
		control
	} = useForm<TPostFormValues>({
		resolver: zodResolver(postFormSchema),
		defaultValues
	});

	const onHandleSubmit = (data: TPostFormValues) => {
		onSubmit && onSubmit(data);
	};

	return (
		<form
			className={styles.postForm}
			onSubmit={handleSubmit(onHandleSubmit)}
			autoComplete="off"
		>
			<div className={styles.postForm__body}>
				<div className={styles.inputs}>
					<div className={styles.inputs__text}>
						<TextField
							label="Your name"
							error={errors.name?.message}
							autoComplete="off"
							{...register('name')}
						/>
						<TextField
							label="Email"
							error={errors.email?.message}
							autoComplete="off"
							{...register('email')}
						/>
						<TextField
							label="Phone"
							helperText="+38 (XXX) XXX - XX - XX"
							error={errors.phone?.message}
							autoComplete="off"
							{...register('phone')}
						/>
					</div>
					<div className={styles.inputs__radio}>
						<Controller
							control={control}
							name="positionId"
							render={({ field }) => (
								<RadioGroup
									label="Select your position"
									error={errors.positionId?.message}
								>
									{options.map(option => (
										<Radio
											{...field}
											key={option.value}
											value={option.value}
											label={option.label}
										/>
									))}
								</RadioGroup>
							)}
						/>
					</div>
					<div className={styles.inputs__file}>
						<FileInput
							label="Upload your photo"
							accept="image/jpg, image/jpeg"
							error={errors.photo?.message}
							{...register('photo')}
						/>
					</div>
				</div>
			</div>
			<div className={styles.postForm__action}>
				<Button label={isLoading ? 'Submitting...' : 'Sign up'} />
			</div>
		</form>
	);
};

export default PostForm;
