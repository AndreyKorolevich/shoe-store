import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { ADD_SHOES_CART, FETCH_CARD_DETAILS } from '../../../redux/actions/actions';
import { CardDetailInterface } from '../../../interfaces/interface';
import CardTable from './CardTable';
import Preloader from '../../Common/Preloader';
import Sizes from './Sizes';
import Count from './Count';
import {
  getCardDetails,
  getCount,
  getLoadingCardDetails,
  getSelectedSize,
} from '../../../redux/selectors/card_selector';

const CardDetail: React.FC = ({ match }: any) => {
  const { id } = match.params;
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoadingCardDetails: boolean = useSelector(getLoadingCardDetails);
  const count: number = useSelector(getCount);
  const selectedSize: string = useSelector(getSelectedSize);
  const openCard: CardDetailInterface = useSelector(getCardDetails);

  useEffect(() => {
    dispatch({
      type: FETCH_CARD_DETAILS,
      payload: {
        id: id,
      },
    });
  }, [dispatch, id]);

  const onClick = () => {
    dispatch({
      type: ADD_SHOES_CART,
      payload: {
        ...openCard,
        count,
        selectedSize,
      },
    });
    history.push('/cart.html');
  };

  return (
    <>
      {isLoadingCardDetails || openCard === null ? (
        <Preloader />
      ) : (
        <section className='catalog-item'>
          <h2 className='text-center'>{openCard.title}</h2>
          <div className='row'>
            <div className='col-5'>
              <img src={openCard.images[0]} className='img-fluid' alt={openCard.title} />
            </div>
            <div className='col-7'>
              <CardTable
                sku={openCard.sku}
                manufacturer={openCard.manufacturer}
                color={openCard.color}
                material={openCard.material}
                season={openCard.season}
                reason={openCard.reason}
              />
              <div className='text-center'>
                <Sizes sizes={openCard.sizes} />
                <Count />
              </div>
              <button
                onClick={onClick}
                type='button'
                className='btn btn-danger btn-block btn-lg'
                disabled={selectedSize === ''}>
                В корзину
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CardDetail;
