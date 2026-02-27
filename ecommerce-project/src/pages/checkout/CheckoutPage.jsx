import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import './CheckoutPage.css';
import OrderSummary from './OrderSummary';
import PaymentSummary from './PaymentSummary';

function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOtions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOtions(response.data);
            });

        axios.get('/api/payment-summary')
            .then((response) => {
                console.log(response.data);
                setPaymentSummary(response.data);
            });
    }, []);

    return (
        <>
            <title>Checkout</title>

            <Header cart={cart} />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    
                    <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />

                    <PaymentSummary paymentSummary={paymentSummary} />

                </div>
            </div>
        </>
    );
}

export default CheckoutPage