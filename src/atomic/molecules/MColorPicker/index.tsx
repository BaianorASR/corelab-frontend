import React, { FC } from 'react';
import { BlockPicker, ColorChangeHandler } from 'react-color';

import * as S from './styles';

export const MColorPicker: FC = () => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);
  const [color, setColor] = React.useState('#ffffff');

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleChange: ColorChangeHandler = ({ hex }) => setColor(hex);

  return (
    <S.Container>
      <S.ShowColor>
        Cor:
        <div style={{ backgroundColor: color }}>
          <input type="text" value={color} onChange={() => {}} />
        </div>
      </S.ShowColor>
      <div>
        <S.OpenPicker onClick={handleClick} type="button">
          Escolher
        </S.OpenPicker>
        {displayColorPicker && (
          <div style={{ position: 'relative' }}>
            <div
              style={{ position: 'absolute', top: '15px', left: '-40px', zIndex: '99' }}
            >
              <BlockPicker color={color} onChange={handleChange} />
            </div>
          </div>
        )}
      </div>
    </S.Container>
  );
};
