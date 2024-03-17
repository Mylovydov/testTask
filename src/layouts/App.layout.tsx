import styles from './app.layout.module.scss';
import { Outlet } from 'react-router-dom';
import { AppContainer, Header } from '@/components';
import { FC, useMemo } from 'react';
import { TAppLayoutProps } from '@/layouts';

const AppLayout: FC<TAppLayoutProps> = () => {
	const actions = useMemo(
		() => [
			{
				label: 'Users',
				onClick: () => {}
			},
			{
				label: 'Sign Up',
				onClick: () => {}
			}
		],
		[]
	);

	return (
		<div className={styles.app}>
			<header className={styles.app__header}>
				<AppContainer>
					<Header items={actions} />
				</AppContainer>
			</header>
			<main className={styles.app__body}>
				<AppContainer>
					<Outlet />
				</AppContainer>
			</main>
		</div>
	);
};
export default AppLayout;
