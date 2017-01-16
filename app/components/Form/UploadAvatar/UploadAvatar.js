// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './styles';
import button from '../../../css/button';
import utility from '../../../css/utility';

import Dropzone from 'react-dropzone';

const UploadAvatar = (props) => {
	return (
		<div>
			<Dropzone onDrop={props.handleAvatarUpload}>
				<div>Try dropping some files here, or click to select files to upload.</div>
			</Dropzone>
			<label htmlFor="upload" className={classnames(button.base, styles.base)}>
				Upload Avatar
				<input id="upload" type="file" className={utility.visuallyHidden} onChange={props.handleAvatarUpload} />
			</label>
		</div>
	);
};

export default UploadAvatar;
