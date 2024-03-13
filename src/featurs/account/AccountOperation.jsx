import { useDispatch, useSelector } from "react-redux";
import DisplayBalance from "./DisplayBalance";
import { useState } from "react";
import Button from "../../ui/Button";
import { deposit, payLoan, requestLoan, wihtdraw } from "./accountSlice";

function AccountOperation() {
  const { loan, isLoading } = useSelector((store) => store.account);
  const dispatch = useDispatch();
  const [depositValue, setDepositValue] = useState("");
  const [currencyType, setCurrencyType] = useState("USD");
  const [withDrawValue, setWithDrawValue] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  function HandleDeposit(e) {
    e.preventDefault();
    dispatch(deposit(depositValue, currencyType));
    setDepositValue("");
    setCurrencyType("USD");
  }
  function HandleWithdraw(e) {
    e.preventDefault();
    dispatch(wihtdraw(withDrawValue));
    setWithDrawValue("");
  }
  function HandleRequestLoan(e) {
    e.preventDefault();
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }
  function HandlePayLoan(e) {
    e.preventDefault();
    dispatch(payLoan());
  }
  return (
    <div className="relative ">
      <DisplayBalance />
      <div className=" px-5 py-11">
        <form onSubmit={HandleDeposit} className="my-2 grid grid-cols-4 gap-2">
          <label>Deposit</label>
          <input
            required
            type="number"
            min={0}
            value={depositValue}
            onChange={(e) => {
              setDepositValue(Number(e.currentTarget.value));
            }}
            className="outline-none"
          />
          <select
            value={currencyType}
            onChange={(e) => setCurrencyType(e.currentTarget.value)}
            className="outline-none"
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <Button type={"success"} disabled={isLoading}>
            {isLoading ? "converting...." : `DEPOSIT ${depositValue}`}
          </Button>
        </form>
        <form onSubmit={HandleWithdraw} className="my-2 grid grid-cols-4 gap-2">
          <label>Withdraw</label>
          <input
            required
            className="outline-none"
            type="number"
            min={0}
            value={withDrawValue}
            onChange={(e) => {
              setWithDrawValue(Number(e.currentTarget.value));
            }}
          />
          <Button type={"success"}>WITHDRAW</Button>
        </form>
        <form
          onSubmit={HandleRequestLoan}
          className="my-10 grid grid-cols-2 gap-2 border-t py-2"
        >
          <label>Loan </label>
          <input
            required
            className="outline-none"
            type="number"
            min={0}
            value={loanAmount}
            onChange={(e) => {
              setLoanAmount(Number(e.currentTarget.value));
            }}
          />
          <label> Purpose</label>
          <input
            className="outline-none"
            required
            value={loanPurpose}
            onChange={(e) => {
              setLoanPurpose(e.currentTarget.value);
            }}
          />
          <Button type={"success"}>REQUEST LOAN</Button>
        </form>
        {loan > 0 && (
          <div className="text-center">
            <Button type={"secondary"} onClick={HandlePayLoan}>
              PAY LOAN BY {loan}$
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperation;
