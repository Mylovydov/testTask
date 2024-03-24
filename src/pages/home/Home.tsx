import React from 'react';
import styles from './home.module.scss';
import { MainSection, PostSection } from '@/pages';
import { AppContainer, TextField } from '@/components';
import GetSectionContainer from '../../containers/home/GetSection.container';

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
					<GetSectionContainer />
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
