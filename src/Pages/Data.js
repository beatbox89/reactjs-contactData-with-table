// import { useState } from "react";
import "./Data.css";
import Datalist from "../Component/Datalist";
import UpdateForm from "../Component/UpdateForm";

const Data = ({
  data,
  deleteDataBtn,
  editDataBtn,
  editData,
  cancelEditBtn,
  updateInputData,
  setUpdateInputData,
}) => {
  return (
    <div className="data-container">
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>PHONE</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        {data
          .sort((a, b) => b.date - a.date)
          .map((datalist) => (
            <tbody key={datalist.date}>
              {editData === datalist.date ? (
                <UpdateForm
                  cancelEditBtn={cancelEditBtn}
                  updateInputData={updateInputData}
                  setUpdateInputData={setUpdateInputData}
                />
              ) : (
                <Datalist
                  datalist={datalist}
                  deleteDataBtn={deleteDataBtn}
                  editDataBtn={editDataBtn}
                />
              )}
            </tbody>
          ))}
      </table>
      {data.length === 0 && <h3>No data record</h3>}
    </div>
  );
};

export default Data;
