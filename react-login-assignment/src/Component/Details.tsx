import { useNavigate, useParams } from "react-router-dom";
const Details = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  let client = {
    code: "e001",
    name: "Rahul",
    gender: "Male",
    annualSalary: 5500,
    dateOfBirth: "16/01/1997",
  };
  return (
    <div>
      <h1>Client Details Page: {id}</h1>
      <div>
        Code : {client.code}
        <br></br>
        Name : {client.name}
        <br></br>
        gender : {client.gender}
        <br></br>
        annualSalary : {client.annualSalary}
        <br></br>
        dateOfBirth : {client.dateOfBirth}
        <br></br>
      </div>
      <button onClick={() => navigate("/clientsList")}>Back to List</button>
    </div>
  );
};

export default Details;
