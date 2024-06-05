import { useState } from 'react';
import PropTypes from 'prop-types';


const UserData = ({ users }) => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    };

  const filteredUsers = users.filter((user) => {
    const { name, email, address } = user;
    const { street, city, zipcode } = address;
    const query = searchQuery.toLowerCase();

    return (
      name.toLowerCase().includes(query) ||
      email.toLowerCase().includes(query) ||
      street.toLowerCase().includes(query) ||
      city.toLowerCase().includes(query) ||
      zipcode.toLowerCase().includes(query)
    );
  });

  return (
    <div  className='input_field_12'>
    <div className='input'>
    <input
      className='input_field'
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((curUser) => {
            const { id, name, email, address } = curUser;
            const { street, city, zipcode } = address;

            return (
              <tr key={id}>
                <td className="id" data-label="ID">{id}</td>
                <td className="name" data-label="Name">{name}</td>
                <td data-label="Email">{email}</td>
                <td data-label="Address">
                  {street}, {city}, {zipcode}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
};

UserData.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default UserData;
