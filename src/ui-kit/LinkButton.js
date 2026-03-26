// file: /components/LinkButton.jsx
import { navigate } from 'gatsby';
import { node, string } from 'prop-types';
import React from 'react';

import Button from './Button';

const LinkButton = (props) => {
  const {
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props;
  return (
    <Button
      {...rest} // `children` is just another prop!
      onClick={(event) => {
        onClick && onClick(event);
        navigate(to);
      }}
    />
  );
};

LinkButton.propTypes = {
  to: string.isRequired,
  children: node.isRequired,
};

export default LinkButton;
