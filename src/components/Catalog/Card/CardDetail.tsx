import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import CardTable from './CardTable';
import Preloader from '../../Common/Preloader';
import Sizes from './Sizes';
import Count from './Count';
import { addShoesCart, fetchCardDetails } from '../../../redux/card/card_actions';
import {
  getCardDetails,
  getCount,
  getLoadingCardDetails,
  getSelectedSize,
} from '../../../redux/card/card_selector';

const CardDetail: React.FC = ({ match }: any) => {
  const { id } = match.params;
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoadingCardDetails: boolean = useSelector(getLoadingCardDetails);
  const count: number = useSelector(getCount);
  const selectedSize: string = useSelector(getSelectedSize);
  const openCard = useSelector(getCardDetails);

  useEffect(() => {
    dispatch(fetchCardDetails(id));
  }, [dispatch, id]);

  const onClick = () => {
    if (openCard) {
      dispatch(addShoesCart(openCard, count, selectedSize));
      history.push('/cart');
    }
  };

  return (
    <>
      {isLoadingCardDetails || openCard === null ? (
        <Preloader/>
      ) : (
        <section className='catalog-item'>
          <h2 className='text-center'>{openCard.title}</h2>
          <div className='row'>
            <div className='col-5 item' >
              <img src={openCard.images[0]} className='img-fluid' alt={openCard.title}/>
              <span className='item-price'>{openCard.price} ₽</span>
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
                <Sizes sizes={openCard.sizes}/>
                <Count/>
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
