import type { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { TBuildOptions } from './types/types';

export function buildLoaders(options: TBuildOptions): ModuleOptions['rules'] {
	const isDev = options.mode === 'development';

	const assetLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource'
	};

	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: 'convertColors',
								params: {
									// currentColor: false
								}
							}
						]
					}
				}
			}
		]
	};

	const babelLoader = {
		test: /\.tsx?$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					'@babel/preset-env',
					'@babel/preset-typescript',
					['@babel/preset-react', { runtime: isDev ? 'automatic' : 'classic' }]
				],
				plugins: [isDev && require.resolve('react-refresh/babel')].filter(
					Boolean
				)
			}
		}
	};

	const cssLoaderWithModules = {
		loader: 'css-loader',
		options: {
			modules: {
				localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
			}
		}
	};

	const sassLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			cssLoaderWithModules,
			'sass-loader'
		]
	};
	return [
		svgLoader,
		assetLoader,
		babelLoader,
		// esbuildLoader,
		sassLoader
	];
}
