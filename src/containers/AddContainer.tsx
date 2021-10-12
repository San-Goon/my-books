import { goBack } from "connected-react-router";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Add from "../components/Add";
import { BookReqType, RootState } from "../types";
import { logout as logoutSagaStart } from "../redux/modules/auth";
import { addBook as addBookSagaStart } from "../redux/modules/books";

const AddContainer = () => {
  const loading = useSelector<RootState, boolean>(
    (state) => state.auth.loading
  );
  const dispatch = useDispatch();
  const back = useCallback(() => {
    dispatch(goBack());
  }, [dispatch]);
  const logout = useCallback(() => {
    dispatch(logoutSagaStart());
  }, [dispatch]);
  const add = useCallback(
    (book: BookReqType) => {
      dispatch(addBookSagaStart());
    },
    [dispatch]
  );
  return <Add back={back} loading={loading} logout={logout} add={add} />;
};

export default AddContainer;
