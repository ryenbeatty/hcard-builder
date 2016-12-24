// @flow
import React from 'react';
import styles from './styles';

const Fieldset = (props) => {
	return (
		<fieldset className={styles.base}>
			<h2 className={styles.title}>{props.title}</h2>
			<div className={styles.body}>
				{props.children}
			</div>
		</fieldset>
	);
};

export default Fieldset;
