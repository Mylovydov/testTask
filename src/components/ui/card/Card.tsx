import React, { FC, PropsWithChildren } from 'react';
import styles from './card.module.scss';

const Card: FC<PropsWithChildren> = ({ children }) => {
	return <div className={styles.card}>{children}</div>;
};

export default Card;
