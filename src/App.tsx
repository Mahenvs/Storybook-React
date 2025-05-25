import "./App.css";
import DataTable from "./components/DataTable";
import FormBuilder from "./components/FormBuilder";
import ConstructForm from "./components/ConstructForm";
// const nameIs = "Mahe";
function App() {
  // console.log(nameIs);
  return (
    <div className="layout">
      <DataTable />
      <FormBuilder />
      <ConstructForm />
    </div>
  );
}

export default App;
