# Next-Popover-React

![Header Image](public/Popover.png)

React wrapper for next-popover library

[![Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/next-popover-vywrrk)

[中文文档](./README_zh.md)

## Install

```
npm i next-popover-react
```
or
```
yarn add next-popover-react
```
or
```
pnpm add next-popover-react
```

## Usage

```jsx
import Popover, { PlacementType, EmitType } from 'next-popover-react';

export default () => (
  <Popover content="next-popver-react"><button>Trigger</button></Popover>
);
```