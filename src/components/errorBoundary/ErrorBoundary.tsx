import { Component, ReactNode } from 'react';
import styles from './errorBoundary.module.scss';
import { Typography } from '@/components';
import image from '@/assets/error.png';

export type TErrorBoundaryProps = {
	children: ReactNode;
	fallback?: ReactNode;
};

export type TErrorBoundaryState = {
	hasError: boolean;
	error: Error | null;
};

class ErrorBoundary extends Component<
	TErrorBoundaryProps,
	TErrorBoundaryState
> {
	constructor(props: TErrorBoundaryProps | Readonly<TErrorBoundaryProps>) {
		super(props);
		this.state = {
			hasError: false,
			error: null
		};
	}

	static getDerivedStateFromError(error: Error): TErrorBoundaryState {
		return {
			hasError: true,
			error: error
		};
	}

	render() {
		if (this.state.hasError) {
			return (
				this.props.fallback || (
					<div className={styles.boundary}>
						<img className={styles.boundary__img} src={image} alt="Error" />
						<div className={styles.boundary__text}>
							<Typography textAlign="center">
								{this.state.error.toString()}
							</Typography>
						</div>
					</div>
				)
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
