import React from 'react';

import { Button } from './button.container';

const CustomButton = ({ children, btn, ...otherProps }) => (
  <Button btn={btn} {...otherProps}>
    {children}
  </Button>
);

export default CustomButton;
