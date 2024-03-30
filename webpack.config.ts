import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { TBuildPaths, TEnvVariables } from './config/build/types/types';
import path from 'path';

export default (env: TEnvVariables): webpack.Configuration => {
	const paths: TBuildPaths = {
		env: path.resolve(__dirname, '.env'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		public: path.resolve(__dirname, 'public'),
		output: path.resolve(__dirname, 'build'),
		src: path.resolve(__dirname, 'src')
	};

	return buildWebpack({
		port: env.port || 3000,
		mode: env.mode || 'development',
		paths,
		analyzer: env.analyzer
	});
};
