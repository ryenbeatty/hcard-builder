// @flow
import React from 'react';
import styles from './styles';

import Submit from '../Submit';
import UploadAvatar from '../UploadAvatar';
import ButtonGroup from '../ButtonGroup';

const FormFooter = (props) => {
	return (
		<footer className={styles.base}>
			<ButtonGroup>
				<UploadAvatar handleAvatarUpload={props.handleAvatarUpload} />
				<Submit handleSubmit={props.handleSubmit} />
			</ButtonGroup>
		</footer>
	);
};

export default FormFooter;
