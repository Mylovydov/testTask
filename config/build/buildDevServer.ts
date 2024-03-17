import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { TBuildOptions } from './types/types';

export function buildDevServer(options: TBuildOptions): DevServerConfiguration {
	return {
		open: true,
		hot: true,
		port: options.port,
		historyApiFallback: true
	};
}
