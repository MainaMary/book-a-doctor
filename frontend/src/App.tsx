import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./layout/layout";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
}

export default App;
