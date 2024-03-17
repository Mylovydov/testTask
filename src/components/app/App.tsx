import { useState } from 'react';
import styles from './app.module.scss';
import logo from '@/assets/logo-white.png';
import photo from '@/assets/IMG20231104161831.jpg';
import Logo from '@/assets/software.svg';

const App = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>Hello, world!</h1>
			<img src={logo} alt="Logo" />
			<img width={100} src={photo} alt="Logo" />
			<h2>{count}</h2>
			<div>
				<Logo width={200} height={200} />
			</div>
			<button className={styles.button} onClick={() => setCount(count + 1)}>
				Increment
			</button>
		</div>
	);
};

export default App;
