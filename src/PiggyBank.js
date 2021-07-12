import React, {useState} from "react";
import AccountDetails from "./accountDetails.js";

const PiggyBank = ({title, depositAmount}) => {

  const [total, setTotal] = useState(0);

  const deposit = () => {
    setTotal(total + depositAmount);
  }

  const withdraw = () => {
    let newAmount = total - depositAmount;

    if(newAmount < 0){
      newAmount = 0;
    }

    setTotal(newAmount);
  }

  const john = {
    name: 'John Smith',
    age: 32,
    account_type: 'business'
}

  return(
    <>
      <h1>{title}</h1>
      <p>Total: £{total}</p>
      <button onClick={() => deposit()}>Deposit</button>
      <button onClick={() => withdraw()}>Withdraw</button>
      <AccountDetails user={john} />
    </>
  )
}

export default PiggyBank;