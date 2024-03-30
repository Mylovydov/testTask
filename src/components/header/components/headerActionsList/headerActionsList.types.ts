export type THeaderActions = {
	label: string;
	onClick: () => void;
};

export type THeaderActionsListProps = {
	items: THeaderActions[];
};
