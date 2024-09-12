import React from 'react';

import Loader from '../../../admin/components/helpers/Loader/Loader';
import Modal from '../../../admin/components/helpers/Modal/Modal';

import classes from './LoaderModal.module.css';

function LoaderModal({ message }) {
  return (
    <Modal>
      <Loader />
      {message && <p className={classes.loggingMessage}> {message}</p>}
    </Modal>
  );
}

export default LoaderModal;
