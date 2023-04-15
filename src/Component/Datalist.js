import { XCircleIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const Datalist = ({ datalist, deleteDataBtn, editDataBtn }) => {
  return (
    <tr>
      <td>{datalist.fullName}</td>
      <td>{datalist.address}</td>
      <td>{datalist.phoneNumber}</td>
      <td>{datalist.email}</td>
      <td className="action">
        <button onClick={() => deleteDataBtn(datalist)}>
          <XCircleIcon />
        </button>
        <button onClick={(e) => editDataBtn(e, datalist)}>
          <PencilSquareIcon />
        </button>
      </td>
    </tr>
  );
};

export default Datalist;
