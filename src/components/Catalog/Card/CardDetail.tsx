import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {FETCH_CARD_DETAILS} from "../../../redux/actions/actions";
import {getCardDetails, getLoadingCardDetails} from "../../../redux/selectors/card_selector";
import {CardDetailInterface} from "../../../redux/interfaces/interface";
import CardTable from "./CardTable";
import Preloader from "../../Common/Preloader";


const CardDetail = ({match}: any) => {
    const {id} = match.params;
    const isLoadingCardDetails: boolean = useSelector(getLoadingCardDetails)
    const openCard: CardDetailInterface = useSelector(getCardDetails)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: FETCH_CARD_DETAILS,
            payload: {
                id
            }
        })
    }, [dispatch, id])


    return (
        <>
            {isLoadingCardDetails || openCard === null
                ? <Preloader/>
                : <section className='catalog-item'>
                    <h2 className='text-center'>{openCard.title}</h2>
                    <div className='row'>
                        <div className='col-5'>
                            <img
                                src={openCard.images[0]}
                                className='img-fluid'
                                alt={openCard.title}
                            />
                        </div>
                        <div className='col-7'>
                            <CardTable sku={openCard.sku} manufacturer={openCard.manufacturer} color={openCard.color}
                                       material={openCard.material} season={openCard.season} reason={openCard.reason}/>
                            <div className='text-center'>
                                <p>
                                    Размеры в наличии: <span className='catalog-item-size selected'>18 US</span>{' '}
                                    <span className='catalog-item-size'>20 US</span>
                                </p>
                                <p>
                                    Количество:{' '}
                                    <span className='btn-group btn-group-sm pl-2'>
                <button type='button' className='btn btn-secondary'>
                  -
                </button>
                <span className='btn btn-outline-primary'>1</span>
                <button type='button' className='btn btn-secondary'>
                  +
                </button>
              </span>
                                </p>
                            </div>
                            <button type='button' className='btn btn-danger btn-block btn-lg'>
                                В корзину
                            </button>
                        </div>
                    </div>
                </section>}
        </>
    )
}

export default CardDetail
