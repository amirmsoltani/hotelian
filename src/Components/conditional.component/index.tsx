import React, {FunctionComponentElement, ReactNodeArray, ReactElement} from 'react';

export const If = ({children}: {children: any, condition: boolean | (() => boolean)}) => children;
export const ElIf = If;
export const Else = (children: any) => children;
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
    switch (child.type.name) {
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
        throw 'please use If ElIf and Else Component';
    }
  });
  return Child.length !== 0 ? Child : null;
};

export default Conditional;
