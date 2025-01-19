import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Profile } from "./components/profile/Profile";
import { UserContextProvider } from "./contexts/userContextProvider";
// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1> Networking Cafe</h1>
        <UserContextProvider>
          <Profile />
        </UserContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
