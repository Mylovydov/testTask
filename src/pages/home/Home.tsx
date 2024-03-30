import { FC } from 'react';
import styles from './home.module.scss';
import { GetSection, MainSection, PostSection, THomePageProps } from '@/pages';
import { AppContainer } from '@/components';

const HomePage: FC<THomePageProps> = ({
	users,
	onFetchMore,
	isDataFetching,
	isInitDataLoading,
	hasNextPage,
	...postSectionProps
}) => {
	return (
		<div className={styles.home}>
			<section className={styles.home__main}>
				<AppContainer classes={styles.mainContainer}>
					<MainSection />
				</AppContainer>
			</section>
			<section className={styles.home__get}>
				<AppContainer>
					<GetSection
						getTitle="Working with GET request"
						users={users}
						onFetchMore={onFetchMore}
						isDataFetching={isDataFetching}
						isInitDataLoading={isInitDataLoading}
						hasNextPage={hasNextPage}
					/>
				</AppContainer>
			</section>
			<section className={styles.home__post}>
				<AppContainer classes={styles.postContainer}>
					<PostSection {...postSectionProps} />
				</AppContainer>
			</section>
		</div>
	);
};

export default HomePage;
