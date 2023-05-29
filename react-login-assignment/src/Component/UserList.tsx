import { useNavigate } from "react-router-dom";

interface Props {
  userId: string;
  userName: string;
  company: string;
  userType: string;
}

const UsersList = () => {
  const navigate = useNavigate();

  const goToUserDetails = (item: Props) => {
    navigate(`/details/${item.userId}`);
  };

  let clients: Props[] = [
    {
      company: "Trivium eSolutions",
      userId: "101",
      userName: "Tom",
      userType: "Male",
    },
    {
      company: "Trivium eSolutions",
      userId: "106",
      userName: "Sam",
      userType: "Male",
    },
    {
      company: "Tata Consultancy",
      userId: "203",
      userName: "Ravi",
      userType: "Male",
    },
    {
      company: "Tata Consultancy",
      userId: "005",
      userName: "Kaveri",
      userType: "Female",
    },
  ];

  return (
    <>
      <h2>Users List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">User Name</th>
            <th scope="col">Company</th>
            <th scope="col">User Type</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((item, index) => (
            <tr key={index}>
              <td>{item.userName}</td>
              <td>{item.company}</td>
              <td>{item.userType}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    goToUserDetails(item);
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
        onClick={() => navigate("/addUser")}
        className="btn btn-primary m-2"
      >
        Add User
      </button>
      <button
        onClick={() => navigate("/dashboard")}
        className="btn btn-primary m-2"
      >
        Back to Dashboard
      </button>
    </>
  );
};

export default UsersList;
