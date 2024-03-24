import { FC } from 'react';
import { Button, THeaderActionsListProps } from '@/components';
import styles from './headerActionsList.module.scss';

const HeaderActionsList: FC<THeaderActionsListProps> = ({ items = [] }) => (
	<ul className={styles.headerActionsList}>
		{items.map(({ label, onClick }, i) => (
			<Button label={label} onClick={onClick} key={i} />
		))}
	</ul>
);

export default HeaderActionsList;
