import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from "../Common/Modal";
import {SHOW_SUCCESS_ORDER_SHOES} from "../../redux/actions/actions";
import {getShowSuccessOrder} from "../../redux/selectors/cart_selector";

const SuccessOrder: React.FC = () => {
    const isShowSuccessOrderShoes = useSelector(getShowSuccessOrder);
    const dispatch = useDispatch();

    const onCancel = () => {
        dispatch({
            type: SHOW_SUCCESS_ORDER_SHOES,
        });
    };

    return (
        <>
            {isShowSuccessOrderShoes && (
                <Modal onClose={onCancel}>
                    <p className='success'>
                        Спасибо за заказ, наш менеджер скоро свяжется с вами!
                    </p>
                </Modal>
            )}
        </>
    );
};

export default SuccessOrder;
