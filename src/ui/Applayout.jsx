import { useSelector } from "react-redux";
import CreateCustomer from "../featurs/customer/CreateCustomer";
import AccountOperation from "../featurs/account/AccountOperation";

function Applayout() {
  const { fullName, userName, pin, createdAt } = useSelector(
    (store) => store.customer,
  );
  return (
    <div className=" atm mx-2  flex items-center justify-center ">
      <section className="h-96 basis-80 rounded border border-stone-300  p-2 sm:basis-[30rem]">
        <h1 className="rounded bg-stone-200 py-2 text-center text-sm  font-semibold uppercase text-stone-800 ">
          {fullName ? `Welcome, ${fullName}` : "ATM"}
        </h1>
        {!fullName ? <CreateCustomer /> : <AccountOperation />}
      </section>
    </div>
  );
}

export default Applayout;
