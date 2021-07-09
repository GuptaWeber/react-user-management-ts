import {User_details} from '../common/Custom_interface';
import {FC, useState} from 'react';
import {Button} from 'react-bootstrap';
import {FiEye, FiGithub} from 'react-icons/fi';
import { clean_url } from './UserDetails';
export function UserTableRows(props) {
  const rows = [] as any;
  const [empid, SetEmpId] = useState(props.emp_id);
  function handleChange(event) {
    props.onChange(event);
  }
  props.users.forEach((user) => {
    rows.push(<UserTableRow user={user} onChange={handleChange}></UserTableRow>);
  });
  return <tbody>{rows}</tbody>;
}
export function UserTableRow(props) {
  const [empid, SetEmpId] = useState(props.emp_id);
  const user: User_details = props.user;
  function handleChange(event) {
   
   console.log(JSON.stringify(event.target.name));
    props.onChange(event.target.name);
  }
  
  return (
    <tr>
      <td>
        <Button size="sm" name={user.id.toString()} onClick={handleChange}>
          <FiEye></FiEye>
        </Button>
      </td>
      <td>{user.name}</td>
      <td>{user.contact?.mobile}</td>
      <td>{user.company?.name}</td>
      <td>
        <a href={clean_url(user.social?.github_url)} target="_blank" rel="noreferrer">
          <Button variant="info">
            <FiGithub></FiGithub>
          </Button>
        </a>
      </td>
    </tr>
  );
}


