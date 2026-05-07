import { Outlet } from "react-router";
import CommonLayout from "./components/ui/layouts/CommonLayout";
function App() {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}

export default App;
