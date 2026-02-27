import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import Header from '../../components/Header';
import './OrdersPage.css';
import OrdersGrid from './OrdersGrid';


function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrdersData = async () => {
            const response = await axios.get('/api/orders?expand=products');
            setOrders(response.data);
        };

        getOrdersData();
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