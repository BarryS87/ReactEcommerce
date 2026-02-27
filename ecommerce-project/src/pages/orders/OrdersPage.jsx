import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import Header from '../../components/Header';
import './OrdersPage.css';
import OrdersGrid from './OrdersGrid';


function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then((response) => {
                setOrders(response.data);
            });
    }, []);

    return (
        <>

            <title>Orders</title>

            <Header cart={cart} />

            <OrdersGrid orders={orders} />

        </>
    );
}

export default OrdersPage;