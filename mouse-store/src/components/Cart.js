import { useContext, useState } from 'react';

import { CartContext } from '../context/cart';
import { Modal } from 'react-bootstrap';
import CartItem from './CartItem';
import { PlaceOrder } from '../Api';

export default function Cart() {
    const [show, setShow] = useState(false);
    const [cartInputs, setCartInputs] = useState({
        name: '',
        email: '',
        phone: ''
    });


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function checkInputs(name, email, phone) {
        let nameRegex = /^[a-zA-Zа-яёА-ЯЁ\s-]{2,64}$/;
        var nameIsValid = nameRegex.test(name);

        let phoneRegex = /^(\+7|8)\s?[(-]?[0-9]{3}[)-]?([-\s]?[0-9]){7}$/;
        var phoneIsValid = phoneRegex.test(phone);

        let mailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        var emailIsValid = mailRegex.test(email);

        if (document.getElementById('name_error'))
            document.getElementById('name_error').style.display = (nameIsValid || name.length === 0) ? 'none' : 'block';
        if (document.getElementById('phone_error'))
            document.getElementById('phone_error').style.display = (phoneIsValid || phone.length === 0) ? 'none' : 'block';
        if (document.getElementById('email_error'))
            document.getElementById('email_error').style.display = (emailIsValid || email.length === 0) ? 'none' : 'block';
        return (nameIsValid && phoneIsValid && emailIsValid);
    }

    const changeHandler = e => {
        setCartInputs({
            ...cartInputs,
            [e.target.id]: e.target.value
        });

        checkInputs(
            e.target.id === 'name' ? e.target.value : cartInputs.name,
            e.target.id === 'email' ? e.target.value : cartInputs.email,
            e.target.id === 'phone' ? e.target.value : cartInputs.phone);
    };

    const { cartItems, clearCart, getCartTotal } = useContext(CartContext);
    return (
        <>
            <button type='button' className='cart_open_button' onClick={handleShow}></button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton closeVariant='white'>
                    <Modal.Title>Корзина</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        cartItems.length === 0
                            ? <p className='cart_info' style={{ textAlign: 'center' }}>Здесь пока пусто, однако вы можете вернуться сюда после того, как что-то выберете</p>
                            : <> 
                                {cartItems.map((item) => <CartItem item={item} key={`${item.id}`} />)}
                                <p className='cart_total'>Сумма заказа: {getCartTotal()}₽</p>
                            </>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <form className='order_form'>
                        <input
                            required={true}
                            type='text' placeholder='Иванов Иван'
                            maxLength={32}
                            className='cart_input'
                            id='name'
                            onChange={changeHandler}
                        />
                        <span className='input_error' id='name_error'>
                            Имя должно содержать от 2 до 32 букв!
                        </span>

                        <input
                            required={true}
                            type='email' placeholder='example@mail.com'
                            className='cart_input'
                            id='email'
                            onChange={changeHandler}
                        />
                        <span className='input_error' id='email_error'>
                            Электронная почта должна соответствовать формату <i>example@mail.com</i>!
                        </span>

                        <input
                            required={true}
                            type='tel' placeholder='+7 (XXX) XXX-XXXX'
                            className='cart_input'
                            id='phone'
                            onChange={changeHandler}
                        />
                        <span className='input_error' id='phone_error'>
                            Номер телефона должен соответствовать формату <i>8 (912) 345-6789</i>!
                        </span>

                        <button className='cart_order_button'
                            disabled={
                                !checkInputs(cartInputs.name, cartInputs.email, cartInputs.phone)
                                || cartItems.length === 0
                            }
                            onClick={
                                () => {
                                    PlaceOrder(
                                        cartInputs.email, cartInputs.phone, cartInputs.name,
                                        cartItems.map((item) => item.quantity),
                                        cartItems.map((item) => item.id),
                                    );
                                    clearCart();
                                }
                            }>
                            Оформить заказ
                        </button>
                    </form>
                </Modal.Footer>

            </Modal >
        </>
    );
}