import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/employeeDetails");
  };
  let employess = [
    {
      code: "e001",
      name: "Tom",
      gender: "Male",
      anualSalary: 5500,
      dateofBirth: "25/6/1988",
    },
    {
      code: "e002",
      name: "Sam",
      gender: "Male",
      anualSalary: 6700,
      dateofBirth: "25/11/1980",
    },
    {
      code: "e003",
      name: "Ravi",
      gender: "Male",
      anualSalary: 8900,
      dateofBirth: "27/11/1980",
    },
    {
      code: "e001",
      name: "Kaveri",
      gender: "Female",
      anualSalary: 9000,
      dateofBirth: "9/6/1991",
    },
  ];
  return (
    <>
      <tbody>
        <tr>
          <th style={{ padding: "10px" }}>Code</th>
          <th style={{ padding: "10px" }}>Name</th>
          <th style={{ padding: "10px" }}>Gender</th>
          <th style={{ padding: "10px" }}>Salry</th>
          <th style={{ padding: "10px" }}>DOB</th>
        </tr>
        {employess.map((item, index) => (
          <tr key={index}>
            <td style={{ padding: "10px" }}>{item.code}</td>
            <td style={{ padding: "10px" }}>{item.name}</td>
            <td style={{ padding: "10px" }}>{item.gender}</td>
            <td style={{ padding: "10px" }}>{item.anualSalary}</td>
            <td style={{ padding: "10px" }}>{item.dateofBirth}</td>
            <td>
              <button className="btn btn-primary" onClick={goDetails}>
                Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <button className="btn btn-primary" onClick={() => navigate("/addUser/")}>
        {" "}
        Add User
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        className="btn btn-primary"
        onClick={() => navigate("/dashboard/")}
      >
        Back to Dashboard
      </button>
    </>
  );
}

export default User;
