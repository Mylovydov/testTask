import { TUserItemProps } from '@/components';

export type TGetSectionProps = {
	users: TUserItemProps[];
	onFetchMore: () => void;
	isDataFetching?: boolean;
	isInitDataLoading?: boolean;
	hasNextPage?: boolean;
	getTitle: string;
};
