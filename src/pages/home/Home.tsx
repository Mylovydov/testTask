import React from 'react';
import styles from './home.module.scss';
import { MainSection, PostSection } from '@/pages';
import { AppContainer, TextField } from '@/components';
import GetSectionContainer from '../../containers/home/GetSection.container';
import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary';

const HomePage = () => {
	return (
		<div className={styles.home}>
			<section className={styles.home__main}>
				<AppContainer classes={styles.mainContainer}>
					<MainSection />
				</AppContainer>
			</section>
			<section className={styles.home__get}>
				<AppContainer>
					<ErrorBoundary>
						<GetSectionContainer />
					</ErrorBoundary>
				</AppContainer>
			</section>
			<section className={styles.home__post}>
				<AppContainer>
					<TextField />
					<PostSection />
				</AppContainer>
			</section>
		</div>
	);
};

export default HomePage;
