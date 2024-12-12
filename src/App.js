import { Fragment } from "react";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import MedicineList from "./components/MedicineList";
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <AddProduct />
        <MedicineList />
      </main>
    </Fragment>
  );
}

export default App;
