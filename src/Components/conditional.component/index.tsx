import React, {FunctionComponentElement, ReactNodeArray, ReactElement} from 'react';
import {Text} from 'react-native';

export function If({children}: {children: any, condition: boolean | (() => boolean)}) {
  return children;
};
If.displayName = 'If';

export function ElIf({children}: {children: any, condition: boolean | (() => boolean)}) {
  return children;
};
ElIf.displayName = 'ElIf';

export function Else(children: any) {
  return children;
};
Else.displayName = 'Else';

type Children = FunctionComponentElement<{
  condition: boolean | (() => boolean),
  children: ReactElement
}>

const Conditional: React.FC<{
  children: Children | Children[]
}> = ({children}: {children: Children | Children[]}): any => {
  let Child: ReactNodeArray = [];
  let con: boolean = false;
  React.Children.forEach<Children>(children, child => {
    switch (child.type.displayName) {
      case 'If': {
        con = false;
        if (typeof child.props.condition === 'boolean' && child.props.condition) {
          Child.push(child.props.children);
          con = true;
        } else if (typeof child.props.condition !== 'boolean' && child.props.condition()) {
          Child.push(child.props.children);
          con = true;
        } else if (con)
          break;

      }
      case 'ElIf': {
        if (!con && typeof child.props.condition === 'boolean' && child.props.condition) {
          Child.push(child.props.children);
          con = true;
        } else if (!con && typeof child.props.condition !== 'boolean' && child.props.condition()) {
          Child.push(child.props.children);
          con = true;
        }
        break;
      }
      case 'Else': {
        if (!con)
          Child.push(child.props.children);
        break;
      }
      default:
        Child.push(<Text>con error</Text>);
      // throw 'please use If ElIf and Else Component';
    }
  });
  return Child.length !== 0 ? Child : null;
};

export default Conditional;
