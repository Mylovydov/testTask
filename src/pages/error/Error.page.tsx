import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styles from './error.page.module.scss';
import { AppContainer, Typography } from '@/components';
import image from '@/assets/error.png';

const ErrorPage = () => {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		// here is may check for the status code and render different error messages
		return (
			<section className={styles.errorPage}>
				<div className={styles.errorPage__errorImg}>
					<img src={image} alt="Error" />
				</div>
				<div className={styles.errorPage__errorBody}>
					<Typography
						text={error.statusText}
						variant="h1"
						weight="bold"
						textAlign="center"
					/>
				</div>
			</section>
		);
	}

	return (
		<AppContainer>
			<section className={styles.errorPage}>
				<div className={styles.errorPage__errorImg}>
					<img src={image} alt="Error" />
				</div>
				<div className={styles.errorPage__errorBody}>
					<Typography
						text="Oops!"
						variant="h1"
						weight="bold"
						textAlign="center"
					/>
					<Typography textAlign="center" text="Something went wrong" />
				</div>
			</section>
		</AppContainer>
	);
};

export default ErrorPage;
