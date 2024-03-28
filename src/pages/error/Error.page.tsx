import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styles from './error.page.module.scss';
import { Typography } from '@/components';

const ErrorPage = () => {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<section className={styles.errorPage}>
				{/*<div className={styles.errorImg}>{imgMarkup}</div>*/}
				<div className={styles.errorBody}>
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
		<section className={styles.errorPage}>
			<div className={styles.errorImg}>{/*<ErrorImg />*/}</div>
			<div className={styles.errorBody}>
				<Typography
					text="Oops!"
					variant="h1"
					weight="bold"
					textAlign="center"
				/>
				<Typography textAlign="center" text="Something went wrong" />
			</div>
		</section>
	);
};

export default ErrorPage;
