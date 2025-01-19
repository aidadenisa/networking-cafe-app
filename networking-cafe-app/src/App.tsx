import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { UserContextProvider } from "./contexts/userContextProvider";
import { NavBar } from "./components/general/NavBar";
import { Router } from "./routes/router";
import { BrowserRouter } from "react-router-dom";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NavBar></NavBar>
          <UserContextProvider>
            <Router />
          </UserContextProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
