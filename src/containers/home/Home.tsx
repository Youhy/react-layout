import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { updateText } from '../../actions/text';
import { Form } from '../../components/Form';


export const Home = () => {
  const dispatch = useDispatch();
  const saveText = useCallback((text: string) => dispatch(updateText(text)), [
    dispatch,
  ]);
  
  let history = useHistory();
  const goToLayout = useCallback(
    () => {
      history.push('/layout');
    },
    [history]
  );


  return (
    <div>
      <Form
        processText={saveText}
        placeholder="Type a text..."
        autofocus
      />
      <button type="button" onClick={goToLayout} className="layout-btn">
        Layout
      </button>
  </div>
  );
};
