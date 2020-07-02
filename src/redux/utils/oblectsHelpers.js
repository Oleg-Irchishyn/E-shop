import { Menu, Input } from 'semantic-ui-react';
import React from 'react';

export const createSecondaryMenuItem = (name, active, method) => (
  <Menu.Item name={name} active={active} onClick={method} />
)

export const createSecondaryMenuInput = (icon, method, placeholder, value) => (
  <Menu.Item>
    <Input icon={icon} onChange={method} placeholder={placeholder} value={value} />
  </Menu.Item>
)

setTimeout(function () {
  document.querySelector(".ui.secondary.menu a:nth-of-type(1").click();
}, 50);

