import { Menu } from 'semantic-ui-react';
import React from 'react';

export const createMenuItem = (name, active, method) => (
  <Menu.Item name={name} active={active} onClick={method} />
)