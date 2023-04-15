import { useState } from "react";
import "./App.css";
import CustomForm from "./Component/CustomForm";
import Navbar from "./Component/Navbar";
import Data from "./Pages/Data";

function App() {
  const [data, setData] = useState([]);

  const [inputData, setInputData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editData, setEditData] = useState(null);
  const [updateInputData, setUpdateInputData] = useState(null);

  const dataOnSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        date: Date.now(),
        fullName: inputData.fullName,
        address: inputData.address,
        phoneNumber: inputData.phoneNumber,
        email: inputData.email,
      },
    ]);
    setInputData({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  };

  const updateDataOnSubmit = (e) => {
    e.preventDefault();
    const updateData = {
      date: updateInputData.date,
      fullName: updateInputData.fullName,
      address: updateInputData.address,
      phoneNumber: updateInputData.phoneNumber,
      email: updateInputData.email,
    };
    const newUpdateData = [...data];
    const index = data.findIndex((data) => data.date === updateInputData.date);
    newUpdateData[index] = updateData;
    setData(newUpdateData);
    setEditData(null);
    setUpdateInputData(null);
  };

  const editDataBtn = (e, data) => {
    e.preventDefault();
    setEditData(data.date);
    setUpdateInputData({
      date: data.date,
      fullName: data.fullName,
      address: data.address,
      phoneNumber: data.phoneNumber,
      email: data.email,
    });
  };

  const cancelEditBtn = (e) => {
    e.preventDefault();
    setEditData(null);
    setUpdateInputData(null);
  };

  const deleteDataBtn = (data) => {
    console.log(data.fullName);
    setData((prev) => prev.filter((t) => t.date !== data.date));
  };

  return (
    <div className="App">
      <Navbar />
      <div className="custom-form-container">
        <CustomForm
          inputData={inputData}
          setInputData={setInputData}
          dataOnSubmit={dataOnSubmit}
        />
      </div>

      <form onSubmit={updateDataOnSubmit}>
        <Data
          data={data}
          deleteDataBtn={deleteDataBtn}
          editDataBtn={editDataBtn}
          editData={editData}
          cancelEditBtn={cancelEditBtn}
          updateInputData={updateInputData}
          setUpdateInputData={setUpdateInputData}
        />
      </form>
    </div>
  );
}

export default App;
