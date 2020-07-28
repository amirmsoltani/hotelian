import React from 'react';


export type contextType = {
  onSelect: (text: string, value: any) => void,
  value:any,
}


const DropDownContext = React.createContext<Partial<contextType>>({});

export default DropDownContext;
