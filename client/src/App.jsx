import React from "react";
import UserList from "./components/userList.jsx";
import { useUserContext } from "./components/UserProvider.jsx";
import { usePageContext } from "./services/pagination.jsx";

function App() {
  const { nextPage } = usePageContext()
  const { listUser } = useUserContext()


  if (listUser == null) {
    return <p>Loading</p>
  }

  return (
    <div >
      <UserList />
      {/* <button onClick={() => nextPage()}>siguiente</button> */}
    </div>
  )
}
export default App
