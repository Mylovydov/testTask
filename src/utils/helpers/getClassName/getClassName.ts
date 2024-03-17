import { TGetClassNameArgs } from '@/utils';

const getClassName = (classObj: TGetClassNameArgs): string => {
	return Object.entries(classObj).reduce<string>(
		(acc, [styleClass, isAllowed]) =>
			isAllowed ? `${acc} ${styleClass}` : acc,
		''
	);
};

export default getClassName;
