import { TRenderListProps } from '@/components';

const RenderList = <ComponentProps extends object>({
	listClassName = '',
	itemClassName = '',
	items = [],
	Component = () => null
}: TRenderListProps<ComponentProps>) => {
	return (
		<ul className={listClassName}>
			{items.map(item => (
				<li className={itemClassName} key={item.id}>
					<Component {...(item as ComponentProps)} />
				</li>
			))}
		</ul>
	);
};

export default RenderList;
