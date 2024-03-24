export type TBuildPaths = {
	entry: string;
	html: string;
	output: string;
	src: string;
	public: string;
	env: string;
};

export type TBuildMode = 'development' | 'production';

export type TEnvVariables = {
	mode: TBuildMode;
	port: number;
	analyzer?: boolean;
};

export type TBuildOptions = {
	port: number;
	mode: TBuildMode;
	paths: TBuildPaths;
	analyzer?: boolean;
};
