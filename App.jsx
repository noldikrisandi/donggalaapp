import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Center, Spinner } from "@chakra-ui/react";
import routes from "./routes/routes";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <Center h="100vh">
            <Spinner size="xl" color="blue.500" />
          </Center>
        }
      >
        <Layout>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default App;
