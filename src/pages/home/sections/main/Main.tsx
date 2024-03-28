import React from 'react';
import styles from './main.module.scss';
import image from '@/assets/home.jpeg';
import { Button, Typography } from '@/components';
import { Link } from 'react-router-dom';

const MainSection = () => {
	return (
		<div className={styles.main}>
			<div className={styles.main__bg}>
				{/*TODO: need create srcset*/}
				<img src={image} alt="Main image" />
			</div>
			<div className={styles.main__content}>
				<div className={styles.content}>
					<div className={styles.content__text}>
						<Typography
							variant="h1"
							textAlign="center"
							light
							text="Test assignment for front-end developer"
						/>
						<Typography
							textAlign="center"
							light
							text="What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving."
						/>
					</div>
					<div className={styles.content__action}>
						<Link to="#">
							<Button label="Sign up" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainSection;
