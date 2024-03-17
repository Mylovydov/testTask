import { useState } from 'react';
import logo from '@/assets/logo-white.png';
import photo from '@/assets/IMG20231104161831.jpg';
import Logo from '@/assets/software.svg';
import AppContainer from '../appContainer/AppContainer';
import { Button } from '@/components';

const App = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<AppContainer>
				<h1>Hello, world!</h1>
				<img src={logo} alt="Logo" />
				<img width={100} src={photo} alt="Logo" />
				<h2>{count}</h2>
				<div>
					<Logo width={200} height={200} />
				</div>
				<Button label="Normal" onClick={() => setCount(count + 1)} />
				<Button disabled label="Normal" onClick={() => setCount(count + 1)} />
			</AppContainer>
		</div>
	);
};

export default App;
