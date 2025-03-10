import { useParams } from "react-router-dom";

function UserProfile() {
  let { id } = useParams();
  return <h2>User Profile: {id}</h2>;
}

export default UserProfile;
