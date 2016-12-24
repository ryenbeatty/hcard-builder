// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './styles';

const FullName = (props) => {
	return (
		<h2 className={classnames('fn n', styles.base)}>
			<span className="given-name">{props.givenName}</span> <span className="family-name">{props.surname}</span>
		</h2>
	);
};

export default FullName;
