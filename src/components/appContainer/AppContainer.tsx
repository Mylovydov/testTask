import React, { FC } from 'react';
import styles from './appContainer.module.scss';
import { TAppContainerProps } from '@/components';
import { getClassName } from '@/utils';

const AppContainer: FC<TAppContainerProps> = ({ children, classes = '' }) => {
	const appContainerClasses = getClassName({
		[styles.appContainer]: true,
		[classes]: classes
	});
	return <div className={appContainerClasses}>{children}</div>;
};

export default AppContainer;
