import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCount } from '../../../redux/selectors/card_selector';
import {CHANGE_COUNT, changeCount} from '../../../redux/actions/actions';

const Count: React.FC = () => {
  const count: number = useSelector(getCount);
  const dispatch = useDispatch();
  const onClick = (param: string): void => {
    if (param === 'decrease' && count > 1) {
      dispatch(changeCount(count - 1));
    } else if (param === 'increase' && count < 10) {
      dispatch(changeCount(count + 1));
    }
  };
  return (
    <p>
      Количество:{' '}
      <span className='btn-group btn-group-sm pl-2'>
        <button onClick={() => onClick('decrease')} type='button' className='btn btn-secondary'>
          -
        </button>
        <span className='btn btn-outline-primary'>{count}</span>
        <button onClick={() => onClick('increase')} type='button' className='btn btn-secondary'>
          +
        </button>
      </span>
    </p>
  );
};

export default Count;
