// @flow
import React from 'react';

import styles from './styles';

const ButtonGroup = (props) => {
	let buttonItems = React.Children.map(props.children, (child, index) => {
		return (
			<div className={styles.item}>{child}</div>
		);
	});

	return (
		<div className={styles.base}>
			{buttonItems}
		</div>
	);
};

export default ButtonGroup;
