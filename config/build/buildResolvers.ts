import type { Configuration } from 'webpack';
import { TBuildOptions } from './types/types';

export function buildResolvers(
	options: TBuildOptions
): Configuration['resolve'] {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@': options.paths.src
		}
	};
}
