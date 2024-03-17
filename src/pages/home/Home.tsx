import React from 'react';
import styles from './home.module.scss';
import { GetSection, MainSection, PostSection } from '@/pages';
import { AppContainer } from '@/components';

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
					<GetSection />
				</AppContainer>
			</section>
			<section className={styles.home__post}>
				<AppContainer>
					<PostSection />
				</AppContainer>
			</section>
		</div>
	);
};

export default HomePage;
