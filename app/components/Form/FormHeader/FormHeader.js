// @flow
import React from 'react';

import styles from './styles';

const FormHeader = (props) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>{props.title}</h1>
		</header>
	);
};

export default FormHeader;
