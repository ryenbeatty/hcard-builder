// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './styles';
import utility from '../../../css/utility';

const RowItem = (props) => {
	let rowItemClasses = classnames(styles.rowItem, styles[props.additionalClass]);

	let labelClasses = classnames(styles.label, { [utility.visuallyHidden]: props.labelVisuallyHidden });

	return (
		<div className={rowItemClasses}>
			<div className={labelClasses}>{props.label}</div>
			<div className={styles.value}>{props.children}</div>
		</div>
	);
};

export default RowItem;
