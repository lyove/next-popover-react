# Next-Popover-React

React wrapper for next-popover library

[![Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/devbox/next-popover-react-h8cfcy)

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
  <Popover 
    content="next-popver-react"
    placement="top-start"
    emit="hover"
  >
    <button>Trigger</button>
  </Popover>
);
```

## API

### Config

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| `content` | `ReactNode \| () => ReactNode` | | `Required`. The content element to be popped up |
| `appendTo` | `HTMLElement` | `document.body` | The element to append the popover to. |
| `placement` | `top` `left` `right` `bottom` `top-left` `top-right` `bottom-left` `bottom-right` `left-top` `left-bottom` `right-top` `right-bottom` | `top` | The placement of the popover. |
| `showArrow` | `Boolean` | `true` | Whether to show arrow |
| `emit` | `click` or `hover` | `click` | Trigger emit type |
| `open` | `boolean` |  | Whether to open the popover box by default |
| `openDelay` | `number` | `100` | Open delay |
| `closeDelay` | `number` | `100` | Close delay |
| `enterable` | `boolean` | `true` | When `emit` is set to `hover`, can the mouse enter the popover |
| `disabled` | `boolean` | | Disabled |
| `clickOutsideClose` | `boolean` | `true` | Automatically close the popover when clicking outside |
| `closeOnScroll` | `boolean` | | Whether to automatically close the popover when the trigger element is scrolled. |
| `triggerOpenClass` | `string` | | The `class` added to the `trigger` when the popover is opened. |
| `wrapperClass` | `string` | | The `class` added to the `popoverWrapper`. |
| `animationClass` | `string` | | The CSS animation class name. |
| `onBeforeEnter` | `() => void` | | Called before the CSS enter animation starts. |
| `onEntered` | `() => void` | | 	Called when the CSS enter animation ends. |
| `onBeforeExit` | `() => void` | | Called before the CSS exit animation starts. |
| `onExited` | `() => void` | | Called when the CSS exit animation ends. |
| `onOpen` | `() => void` | | Called when the popover is opened. |
| `onClose` | `() => void` | |Called when the popover is closed. |