import React, {
	ChangeEvent,
	FC,
	forwardRef,
	useId,
	useRef,
	useState
} from 'react';
import styles from './fileInput.module.scss';
import { FieldControl, TFileInputProps, Typography } from '@/components';
import { getClassName } from '@/utils';

const FileInput: FC<TFileInputProps> = forwardRef<
	HTMLInputElement,
	TFileInputProps
>(
	(
		{
			helperText,
			error,
			label,
			id,
			accept = 'image/*',
			btnLabel = 'Upload',
			onChange,
			...rest
		},
		ref
	) => {
		const inputRef = useRef<HTMLInputElement | null>(null);
		const [file, setFile] = useState<File | null>(null);
		const customId = useId();
		const inputId = id || customId;

		const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
			const selectedFile = event.target.files?.[0];
			if (!selectedFile) {
				return;
			}
			setFile(selectedFile);
			onChange && onChange(event);
		};

		const onUploadBtnClick = () => {
			if (inputRef.current) {
				inputRef.current.click();
			}
		};

		const handleSetRef = (node: HTMLInputElement | null) => {
			if (!node) {
				return;
			}
			inputRef.current = node;
			if (!ref) {
				return;
			}
			if (typeof ref === 'function') {
				return ref(node);
			}
			ref.current = node;
		};

		const fileInputClasses = getClassName({
			[styles.fileInput]: true,
			[styles.error]: !!error
		});

		return (
			<FieldControl error={error} helperText={helperText}>
				<label className={fileInputClasses} htmlFor={inputId}>
					<input
						{...rest}
						ref={handleSetRef}
						accept={accept}
						type="file"
						id={inputId}
						onChange={handleChange}
						className={styles.fileInput__input}
					/>
					<button
						type="button"
						onClick={onUploadBtnClick}
						className={styles.fileInput__button}
					>
						<Typography>{btnLabel}</Typography>
					</button>
					<div className={styles.fileInput__content}>
						{file ? (
							<Typography>{file.name}</Typography>
						) : (
							<Typography classes={styles.fileInput__item}>{label}</Typography>
						)}
					</div>
				</label>
			</FieldControl>
		);
	}
);

export default FileInput;
