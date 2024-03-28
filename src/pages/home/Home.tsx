import React from 'react';
import styles from './home.module.scss';
import { MainSection } from '@/pages';
import { AppContainer, ErrorBoundary } from '@/components';
import { GetSectionContainer, PostSectionContainer } from '@/containers';

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
				<AppContainer classes={styles.postContainer}>
					<ErrorBoundary>
						<PostSectionContainer />
					</ErrorBoundary>
				</AppContainer>
			</section>
		</div>
	);
};

export default HomePage;
