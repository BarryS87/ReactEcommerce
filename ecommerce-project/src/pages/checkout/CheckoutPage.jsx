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
        
        
        const getDeliveryOptions = async () => {
            const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
            setDeliveryOtions(response.data);
        };

        const getPaymentSummary = async () => {
            const response = await axios.get('/api/payment-summary');
            setPaymentSummary(response.data);
        };

        getDeliveryOptions();
        getPaymentSummary(); 
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