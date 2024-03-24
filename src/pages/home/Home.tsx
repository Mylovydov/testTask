import React from 'react';
import styles from './home.module.scss';
import { MainSection, PostSection } from '@/pages';
import { AppContainer, ErrorBoundary, TextField } from '@/components';
import { GetSectionContainer } from '@/containers';
import FileInput from '../../components/ui/form/fileInput/FileInput';
import Radio from '../../components/ui/form/radio/Radio';

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
					<TextField label="sfsdf" helperText="helperText" />
					<FileInput label="sfsdf" helperText="helperText" />
					<Radio label="sfsfsdf" />
					<PostSection />
				</AppContainer>
			</section>
		</div>
	);
};

export default HomePage;
