import React from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedSize } from '../../../redux/card/card_selector';
import { SizeInterface } from '../../../interfaces/interface';
import { changeSize } from '../../../redux/card/card_actions';

interface SizesInterface {
  sizes: Array<SizeInterface>;
}

const Sizes: React.FC<SizesInterface> = ({ sizes }) => {
  const selectedSize: string = useSelector(getSelectedSize);
  const dispatch = useDispatch();
  const onClick = (size: string): void => {
    dispatch(changeSize(size));
  };

  const sortSizes = sizes
    .filter((e: SizeInterface) => e.avalible)
    .map((e: SizeInterface) => (
      <button
        type='button'
        key={e.size}
        onClick={() => onClick(e.size)}
        className={cn('catalog-item-size', {
          selected: selectedSize === e.size,
        })}>
        {e.size}
      </button>
    ));

  return (
    <p>
      Размеры в наличии: {sortSizes.length === 0 ? 'Извините доступных размеров нет в наличии' : sortSizes}
    </p>
  );
};

export default Sizes;
