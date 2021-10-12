import ListContainer from "../containers/ListContainer";
import { Redirect } from "react-router";
import useToken from "../hooks/useToken";

export default function Home() {
  const token = useToken();

  if (token === null) {
    return <Redirect to="/signin" />;
  }
  return <ListContainer />;
}
