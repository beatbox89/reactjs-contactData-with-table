import "./CustomForm.css";

const CustomForm = ({ inputData, setInputData, dataOnSubmit }) => {
  const inputDataOnChange = (e) => {
    const name = e.target.getAttribute("name");
    const value = e.target.value;

    const newValue = { ...inputData };
    newValue[name] = value;

    setInputData(newValue);
  };

  return (
    <form onSubmit={dataOnSubmit}>
      <h3>New Contact</h3>
      <input
        type="text"
        name="fullName"
        required
        autoFocus
        placeholder="Enter a full name"
        value={inputData.fullName}
        onChange={(e) => inputDataOnChange(e)}
      />
      <input
        type="text"
        name="address"
        required
        placeholder="Enter an address"
        value={inputData.address}
        onChange={(e) => inputDataOnChange(e)}
      />
      <input
        type="text"
        name="phoneNumber"
        required
        placeholder="Enter a phone number"
        value={inputData.phoneNumber}
        onChange={(e) => inputDataOnChange(e)}
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Enter an email"
        value={inputData.email}
        onChange={(e) => inputDataOnChange(e)}
      />
      <button>ADD</button>
    </form>
  );
};

export default CustomForm;
