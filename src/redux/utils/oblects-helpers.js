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


export const createTopMenuItem = (name, active, method, text) => (
  <Menu.Item name={name} active={active} onClick={method}>{text}</Menu.Item>
)

export const createTopMenuItemWithCalculations = (name, active, method, text, currency) => (
  <Menu.Item name={name} active={active} onClick={method}>{text}&nbsp; <b>0</b> &nbsp;{currency}</Menu.Item>
)

setTimeout(function () {
  document.querySelector(".ui.secondary.menu a:nth-of-type(1").click();
}, 50);

