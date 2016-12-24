// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './styles';
import button from '../../../css/button';

const Submit = (props) => {
	return (
		<input className={classnames(button.base, styles.base)} type="submit" value="Create hCard" onSubmit={props.handleSubmit} />
	);
};

export default Submit;
