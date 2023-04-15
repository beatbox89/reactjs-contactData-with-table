import "./UpdateForm.css";
import { NoSymbolIcon, PencilIcon } from "@heroicons/react/24/outline";

const UpdateForm = ({ cancelEditBtn, updateInputData, setUpdateInputData }) => {
  const updateInputDataOnChange = (e) => {
    const updateName = e.target.getAttribute("name");
    const updateValue = e.target.value;

    const newUpdateValue = { ...updateInputData };
    newUpdateValue[updateName] = updateValue;

    setUpdateInputData(newUpdateValue);
    console.log(newUpdateValue);
  };
  return (
    <tr className="edit-form">
      <td>
        <input
          type="text"
          name="fullName"
          autoFocus
          value={updateInputData.fullName}
          onChange={(e) => updateInputDataOnChange(e)}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          value={updateInputData.address}
          onChange={(e) => updateInputDataOnChange(e)}
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          value={updateInputData.phoneNumber}
          onChange={(e) => updateInputDataOnChange(e)}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          value={updateInputData.email}
          onChange={(e) => updateInputDataOnChange(e)}
        />
      </td>
      <td className="action">
        <button>
          <PencilIcon />
        </button>
        <button onClick={cancelEditBtn}>
          <NoSymbolIcon />
        </button>
      </td>
    </tr>
  );
};

export default UpdateForm;
