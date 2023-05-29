import { useNavigate } from "react-router-dom";

interface Props {
  code: string;
  name: string;
  gender: string;
  annualSalary: number;
  dateOfBirth: string;
}

const ClientDetails = () => {
  const navigate = useNavigate();

  const goToDetails = (item: Props) => {
    navigate(`/details/${item.code}`);
  };

  let clients = [
    {
      code: "e001",
      name: "Ravi",
      gender: "Male",
      annualSalary: 5500,
      dateOfBirth: "25/6/1988",
    },
    {
      code: "e002",
      name: "Rahul",
      gender: "Male",
      annualSalary: 6700,
      dateOfBirth: "25/11/1980",
    },
    {
      code: "e003",
      name: "Shambhav",
      gender: "Male",
      annualSalary: 8900,
      dateOfBirth: "27/11/1980",
    },
    {
      code: "e004",
      name: "Shivam",
      gender: "Male",
      annualSalary: 9000,
      dateOfBirth: "9/6/1991",
    },
  ];

  return (
    <>
      <h2>Clients Detailed List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Salary</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((item, index) => (
            <tr key={index}>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.annualSalary}</td>
              <td>{item.dateOfBirth}</td>
              <td>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => {
                    goToDetails(item);
                  }}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => navigate("/dashboard")}
        className="btn btn-primary m-2"
      >
        Back to Dashboard
      </button>
    </>
  );
};

export default ClientDetails;
