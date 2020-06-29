import { Menu } from 'semantic-ui-react';
import React from 'react';

export const createMenuItem = (name, active, method) => (
  <Menu.Item name={name} active={active} onClick={method} />
)

setTimeout(function () {
  document.querySelector(".ui.secondary.menu a:nth-of-type(1").click();
}, 50);

