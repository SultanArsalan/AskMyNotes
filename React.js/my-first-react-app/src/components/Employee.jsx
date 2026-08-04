function Employee({ name, id, department, designation, salary }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "250px"
      }}
    >
      <h2>{name}</h2>

      <p>Employee ID: {id}</p>
      <p>Department: {department}</p>
      <p>Designation: {designation}</p>
      <p>Salary: {salary}</p>
    </div>
  );
}

export default Employee;