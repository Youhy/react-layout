import React, { MouseEvent } from 'react';

import one from '../assets/icons/one.png';
import two from '../assets/icons/two.png';
import three from '../assets/icons/three.png';

export interface LayoutMenuProps {
  onClick: (event: MouseEvent<HTMLButtonElement>, numOfCols: number) => void;
}

export const LayoutMenu: React.FC<LayoutMenuProps> = ({ onClick }) => (
  <div className="btn-group">
    <button onClick={(e) => onClick(e, 1)}><img src={one} alt="1 column" height='15px' width='15px'/></button>
    <button onClick={(e) => onClick(e, 2)}><img src={two} alt="2 columns" height='15px' width='15px'/></button>
    <button onClick={(e) => onClick(e, 3)}><img src={three} alt="3 columns" height='15px' width='15px'/></button>
  </div>
);
