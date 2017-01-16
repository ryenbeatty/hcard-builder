// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './styles';
import button from '../../../css/button';
import utility from '../../../css/utility';

const UploadAvatar = (props) => {
	return (
		<label htmlFor="upload" className={classnames(button.base, styles.base)}>
			Upload Avatar
			<input id="upload" type="file" className={utility.visuallyHidden} onChange={props.handleAvatarUpload} />
		</label>
	);
};

export default UploadAvatar;
