import "./PaymentInfo.css";

const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

const PaymentInfo = ({amount = 0}) => {

  return <div className="PaymentInfo">
    <span className="PaymentInfo_title">For payment:</span>
    <span className="PaymentInfo_money">{currencyFormat.format(amount)}</span>
    <span className="PaymentInfo_tax">Including VAT (21%)</span>
  </div>
}

export default PaymentInfo;
