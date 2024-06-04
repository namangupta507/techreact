import React, { useState } from 'react';
import './cart.css';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios'; // Import axios
import { toast } from 'react-toastify'; // Import toast (assuming you use react-toastify)
import 'react-toastify/dist/ReactToastify.css';

// Mock user and userInfo (replace with actual data fetching)
const user = {
  id: 'user-id',
  user_number: 'user-number',
  operator: 'operator-name',
  token: 'user-token',
  user_name: 'user-name',
};

const userInfo = {
  user_wallet: 100, // Example value
};

// Define Cart component
const Cart = ({ cart, setCart }) => {

  const [total, setTotal] = useState(cart.reduce((price, item) => price + item.qty * item.price, 0).toFixed(2));

  // Function to update the user's wallet info (mock implementation)
  const fetchUserWalletInfo = () => {
    // Fetch user wallet info from an API or update state
    console.log('Fetching user wallet info...');
  };

  // Function to create PayPal order
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: total,
        },
      }],
    }).then((orderId) => {
      return orderId;
    });
  };

  // Function to handle order approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(async (details) => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ADD_MONEY_IN_WALLET_API}`,
          {
            user_id: user.id,
            user_number: user.user_number,
            operator: user.operator,
            transaction_id: details.id,
            money_deposited: details.purchase_units[0].amount.value,
            wallet_before_transaction: userInfo.user_wallet,
            user_name: user.user_name,
            payer_details: JSON.stringify(details.payer),
            paypal_date_time: new Date(details.update_time).toISOString().slice(0, 19).replace("T", " "),
            transaction_status: details.status,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        console.log(response, "response......");

        toast.success("Money Added in Wallet Successfully!");
        fetchUserWalletInfo();
      } catch (error) {
        toast.error(
          error?.response?.data?.message ||
          error?.data?.message ||
          error?.message ||
          error
        );
      }
    });
  };

  // Function to handle order errors
  const onError = (error) => {
    console.error("Error in onError", error);
  };

  // Function to increase the quantity of a product
  const incqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    setCart(cart.map((curElm) => (curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm)));
  };

  // Function to decrease the quantity of a product
  const decqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    setCart(cart.map((curElm) => (curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm)));
  };

  // Function to remove a product from the cart
  const removeproduct = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty > 0) {
      setCart(cart.filter((curElm) => curElm.id !== product.id));
    }
  };

  return (
    <div className='cart'>
      <div className='container'>
      <h3>#cart</h3>
      </div>
      {cart.length === 0 ? (
        <div className='empty_cart'>
          <h2>Your Shopping cart is empty</h2>
        
          <Link to='/shop' className='shop_button'>Shop Now</Link>
         
        </div>
      ) : (
        <>
          <div className='container'>
            {cart.map((curElm) => (
              <>
              {/* <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.image} alt='' />
                </div>
                <div className='detail'>
                  <div className='info'>
                    <h4>{curElm.cat}</h4>
                    <h3>{curElm.Name}</h3>
                    <p>Price: ${curElm.price}</p>
                    <p>Total: ${curElm.price * curElm.qty}</p>
                  </div>
                  <div className='quantity'>
                    <button onClick={() => incqty(curElm)}>+</button>
                    <input type='number' value={curElm.qty} readOnly />
                    <button onClick={() => decqty(curElm)}>-</button>
                  </div>
                  <div className='icon'>
                    <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                  </div>
                </div>
              </div> */}

        <div className='box' key={curElm.id}>
          <div className='row'>
            <div className='col-md-3'>  <div className='img_box'>
                  <img src={curElm.image} alt='' />
                </div></div>
              <div className='col-md-4'> 
               <div className='detail'>
                  <div className='info'>
                    <h4>{curElm.cat}</h4>
                    <h3>{curElm.Name}</h3>
                    <p>Price: ${curElm.price}</p>
                    <p>Total: ${curElm.price * curElm.qty}</p>
                  </div>
                  <div className='vt-buttons'>
                  <div className='quantity'>
                    <button onClick={() => incqty(curElm)}>+</button>
                    <input type='number' value={curElm.qty} readOnly />
                    <button onClick={() => decqty(curElm)}>-</button>
                  </div>
                  <div className='icon'>
                    <li onClick={() => removeproduct(curElm)}><AiOutlineClose /></li>
                  </div>
                </div>
                 </div>
                </div>
                <div className='col-md-5'></div>
             
           
          </div>
               
              
              </div>
              </>

            ))}
          </div>
          <div className='bottom'>
            <div className='Total'>
              <h4>Sub Total: ${total}</h4>
            </div>
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
