import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "No User",
});

export default UserContext;