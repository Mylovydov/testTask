import { TUserItemProps } from '@/components';

export type TGetSectionProps = {
	items: TUserItemProps[];
	onFetchMore: () => void;
	isDataFetching?: boolean;
	isInitDataLoading?: boolean;
	hasNextPage?: boolean;
	title: string;
};
