import "./Checkout.css";
import Header from "../Header/Header";

const Checkout = () => {

  return <div className="Checkout">
    <Header>Checkout details</Header>
    <div className="PaymentInfo">
      <span>For payment:</span>
      <span>$240,55</span>
      <span>Including VAT (21%)</span>
    </div>
    <div className="PaymentType">
      <label><input type="radio" name="paymentType" value="credit"/>Credit Card</label>
      <label><input type="radio" name="paymentType" value="applepay"/>Apple Pay</label>
    </div>
    <form>
      <label>
        <span>Card number</span>
        <input type="text" name="cardNumber" placeholder="0000 0000 0000 0000" />
      </label>
      <label>
        <span>Cardholder name</span>
        <input type="text" name="cardholderName" placeholder="JOHN SMITH" />
      </label>
      <label>
        <span>Expiry date</span>
        <input type="text" name="expiryDate" placeholder="MM / YY" />
      </label>
      <label>
        <span>CVV / CVC</span>
        <input type="text" name="cvvcvc" placeholder="000" />
      </label>
      <p>We will send you an order details to your email after the successfull payment</p>
      <input type="submit" value="Pay for the order" />
    </form>
  </div>
}

export default Checkout;