import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SelectCardInterface } from '../../redux/interfaces/interface'
import {getLoadingSendForm, getSelectShoes} from '../../redux/selectors/cart_selector'
import {SUBMIT_ORDER} from "../../redux/actions/actions";
import Preloader from "../Common/Preloader";

const CartForm = () => {
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [agreement, setAgreement] = useState(false)
  const selectShoes: Array<SelectCardInterface> = useSelector(getSelectShoes)
  const isLoadingSendForm: boolean = useSelector(getLoadingSendForm)
  const dispatch = useDispatch()
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'phone') setPhone(e.target.value)
    else if (e.target.name === 'address') setAddress(e.target.value)
    else if (e.target.name === 'agreement') setAgreement(!agreement)
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    dispatch({
      type: SUBMIT_ORDER,
      payload: {
        owner: {
          phone,
          address,
        },
        items: selectShoes.map(elem => ({
          id: elem.id,
          price: elem.price,
          count: elem.count
        }))
      },
    })
    setAddress('')
    setPhone('')
    setAgreement(false)
  }

  return (
    <>
      {selectShoes.length !== 0 && (
        <section className='order'>
          {isLoadingSendForm && <Preloader/>}
          <h2 className='text-center'>Оформить заказ</h2>
          <div className='card cart'>
            <form className='card-body' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='phone'>
                  Телефон
                  <input onChange={onChange} value={phone} className='form-control'
                    name='phone' placeholder='Ваш телефон' type='text'
                  />
                </label>
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>
                  Адрес доставки
                  <input onChange={onChange} value={address} className='form-control'
                    placeholder='Адрес доставки' name='address' type='text'
                  />
                </label>
              </div>
              <div className='form-group form-check'>
                <label className='form-check-label' htmlFor='agreement'>
                  <input onChange={onChange} checked={agreement} type='checkbox'
                    className='form-check-input' name='agreement'
                  />
                  Согласен с правилами доставки
                </label>
              </div>
              <button type='submit' className='btn btn-outline-secondary' disabled={!agreement}>
                Оформить
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  )
}

export default CartForm
