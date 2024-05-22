interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface DisplayUserProps {
  userdetail: User;
}

const DisplayUser = ({ userdetail }: DisplayUserProps) => {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name </th>
          <th scope="col"> E mail Id </th>
        </tr>
      </thead>
      <tbody>
        {userdetail.map((user: User, index: number) => (
          <tr key={index}>
            <th scope="row">{index + 1} </th>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayUser;
