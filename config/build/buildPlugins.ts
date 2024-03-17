import type { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { TBuildOptions } from './types/types';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import path from 'path';

export function buildPlugins({
	mode,
	paths,
	analyzer
}: TBuildOptions): Configuration['plugins'] {
	const isDev = mode === 'development';
	const isProd = mode === 'production';

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({
			template: paths.html,
			favicon: path.resolve(paths.public, 'favicon.ico')
		})
	];

	if (isDev) {
		// plugins for development ...
		plugins.push(new ReactRefreshWebpackPlugin());
	}

	if (isProd) {
		plugins.push(
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css'
			})
		);
	}

	if (analyzer) {
		plugins.push(new BundleAnalyzerPlugin());
	}

	return plugins;
}
