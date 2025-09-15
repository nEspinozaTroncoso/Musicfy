import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Auth } from "./pages";
import { LoggedNavigation } from "./routes";

export default function App() {
  const [user, setUser] = useState(undefined);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  if (user === undefined) return null;

  return user ? <LoggedNavigation /> : <Auth />;
}
