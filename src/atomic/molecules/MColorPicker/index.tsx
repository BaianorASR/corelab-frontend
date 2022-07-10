import React, { FC } from 'react';
import { BlockPicker, ColorChangeHandler } from 'react-color';
import { useFormContext } from 'react-hook-form';

import * as S from './styles';

export const MColorPicker: FC = () => {
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);
  const [color, setColor] = React.useState('#F04F4F');
  const { register, setValue } = useFormContext();
  const modalRef = React.useRef(null);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange: ColorChangeHandler = ({ hex }) => {
    setColor(hex);
    setValue('color', hex);
  };

  return (
    <S.Container>
      <S.ShowColor>
        Cor:
        <div style={{ backgroundColor: color }}>
          <input type="text" value={color} {...register('color')} />
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
              <BlockPicker
                color={color}
                onChange={handleChange}
                ref={modalRef}
                onChangeComplete={handleClose}
              />
            </div>
          </div>
        )}
      </div>
    </S.Container>
  );
};
