// @flow
import React from 'react';

import styles from './styles';

const Input = (props) => {
	return (
		<div className={styles.base}>
			<img src={props.avatar} alt={props.givenName + ' ' + props.surname} />
		</div>
	);
};

export default Input;
