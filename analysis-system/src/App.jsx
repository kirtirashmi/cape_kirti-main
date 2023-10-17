import "./App.css";
import Layout from "./components/common/layout";
import CustomCharts from "./components/customCharts";
import CustomNavbar from "./components/customNavBar/customNavbar";
import CustomTable from "./components/customTable/customTable";
import { lineData, pieData } from "./utils/constants/appConstants";

function App() {
  return (
    <Layout>
      <CustomNavbar />
      <CustomCharts data={{ lineChartData: lineData, pieChartData: pieData }} />
      <CustomTable />
    </Layout>
  );
}

export default App;
