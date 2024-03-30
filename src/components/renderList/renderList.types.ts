import { FC } from 'react';

export type TRenderListProps<Props = object> = {
	items: ({ id: string | number } & Record<string, unknown>)[];
	listClassName?: string;
	itemClassName?: string;
	Component: FC<Props>;
};
