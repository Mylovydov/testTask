import styles from './header.module.scss';
import { FC, memo } from 'react';
import { HeaderActionsList, HeaderProps } from '@/components';
import LogoImg from '@/assets/logo.svg';
import { Link } from 'react-router-dom';

const Header: FC<HeaderProps> = memo(({ items = [] }) => {
	return (
		<div className={styles.header}>
			<div className={styles.header__logo}>
				<Link to="#">
					<LogoImg width="10.4rem" height="2.6rem" />
				</Link>
			</div>
			<div className={styles.header__actions}>
				<HeaderActionsList items={items} />
			</div>
		</div>
	);
});

export default Header;
