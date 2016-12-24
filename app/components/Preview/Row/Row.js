// @flow
import React from 'react';

import styles from './styles';

const Row = (props) => {
	return (
		<div className={styles.base}>
			{props.children}
		</div>
	);
};

export default Row;
