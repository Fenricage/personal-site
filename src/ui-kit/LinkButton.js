// file: /components/LinkButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
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
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkButton;
