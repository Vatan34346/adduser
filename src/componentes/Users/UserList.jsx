import classes from "./UserList.module.css";
import Card from "../Ui/Card";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.useres.map((item) => (
          <li key={item.id}>
            {item.name} ({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
