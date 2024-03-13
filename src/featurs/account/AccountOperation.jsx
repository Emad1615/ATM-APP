import { useDispatch, useSelector } from "react-redux";
import DisplayBalance from "./DisplayBalance";
import { useState } from "react";
import Button from "../../ui/Button";

function AccountOperation() {
  const { loan, balance, isLoading } = useSelector((store) => store.account);
  const dispatch = useDispatch();
  const [depositValue, setDepositValue] = useState("");
  const [currencyType, setCurrencyType] = useState("USD");
  const [withDrawValue, setWithDrawValue] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  function HandleDeposit() {}
  function HandleWithdraw() {}
  function HandleRequestLoan() {}
  function HandlePayLoan() {}
  return (
    <div className="relative ">
      <DisplayBalance />
      <div className=" px-5 py-12">
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
          />
          <select
            value={currencyType}
            onChange={(e) => setCurrencyType(e.currentTarget.value)}
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
          className="my-2 grid grid-cols-4   gap-2"
        >
          <label>Loan </label>
          <input
            required
            type="number"
            min={0}
            value={loanAmount}
            onChange={(e) => {
              setLoanAmount(Number(e.currentTarget.value));
            }}
          />
          <label> Purpose</label>
          <input
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
            <button
              onClick={HandlePayLoan}
              className="my-2 grid grid-cols-4 gap-2"
            >
              PAY LOAN BY {loan}${" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperation;
