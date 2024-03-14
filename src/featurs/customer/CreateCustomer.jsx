import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { createCustomer } from "./customerSlice v1";
import { useState } from "react";
function CreateCustomer() {
  const [Fullname, setFullname] = useState("");
  const [Username, setUsername] = useState("");
  const [PIN, setPIN] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createCustomer(Fullname, Username, PIN));
    setFullname("");
    setUsername("");
    setPIN("");
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex h-full flex-col items-center justify-center gap-3"
      >
        <input
          type="text"
          className="input"
          placeholder="Fullname"
          name="fullname"
          value={Fullname}
          onChange={(e) => {
            setFullname(e.currentTarget.value);
          }}
          required
        />
        <input
          type="text"
          className="input"
          placeholder="Username"
          name="username"
          value={Username}
          onChange={(e) => {
            setUsername(e.currentTarget.value);
          }}
          required
        />
        <input
          type="password"
          className="input"
          placeholder="PIN"
          name="pin"
          value={PIN}
          onChange={(e) => {
            setPIN(e.currentTarget.value);
          }}
          required
        />
        <div className="text-center">
          <Button type="primary">Enter</Button>
        </div>
      </form>
    </>
  );
}

export default CreateCustomer;
