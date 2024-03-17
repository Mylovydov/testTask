import React, { forwardRef } from 'react';
import styles from './typography.module.scss';
import { getClassName } from '@/utils';
import { TTypographyProps } from '@/components';

const variantTags = {
	h1: 'h1',
	body: 'p',
	button: 'span'
};

const Typography = forwardRef<HTMLElement, TTypographyProps>(
	(
		{
			variant = 'body',
			text,
			weight = 'regular',
			classes = '',
			noWrap,
			textAlign = 'left',
			children,
			uppercase = false,
			as
		},
		ref
	) => {
		const typographyClassNames = getClassName({
			[styles.typography]: true,
			[styles[weight]]: weight,
			[styles[textAlign]]: textAlign,
			[styles.noWrap]: noWrap,
			[styles.uppercase]: uppercase,
			[styles[variant]]: variant,
			[classes]: !!classes
		});

		const props = { className: `${typographyClassNames}`, ref };

		return React.createElement(
			as || variantTags[variant] || 'p',
			props,
			text || children
		);
	}
);

Typography.displayName = 'Typography';

export default Typography;
