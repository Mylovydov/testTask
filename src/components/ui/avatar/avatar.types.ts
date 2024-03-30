export type TAvatarProps = {
	size?: 'small' | 'medium' | 'large';
} & (
	| {
			src: string;
			initials?: string;
	  }
	| {
			src?: string;
			initials: string;
	  }
);
