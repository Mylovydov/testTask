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
		control,
		reset
	} = useForm<TPostFormValues>({
		resolver: zodResolver(postFormSchema),
		defaultValues
	});

	const onHandleSubmit = (data: TPostFormValues) => {
		onSubmit && onSubmit(data);
		reset();
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
						<Controller
							control={control}
							render={({ field: { value, onChange, ...field } }) => (
								<FileInput
									{...field}
									label="Upload your photo"
									accept="image/jpg, image/jpeg"
									error={errors.photo?.message}
									file={value}
									onChange={event => {
										const file = event.target.files;
										if (file) {
											onChange(file[0]);
										}
									}}
								/>
							)}
							name="photo"
						/>
					</div>
				</div>
			</div>
			<div className={styles.postForm__action}>
				<Button
					disabled={isLoading}
					label={isLoading ? 'Register...' : 'Sign up'}
				/>
			</div>
		</form>
	);
};

export default PostForm;
