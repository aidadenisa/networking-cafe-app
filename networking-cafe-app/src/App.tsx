import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Profile } from "./profile/Profile";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1> Networking Cafe</h1>
        <Profile />
      </QueryClientProvider>
    </>
  );
}

export default App;
