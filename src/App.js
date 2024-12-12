import { Fragment } from "react";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <AddProduct />
      </main>
    </Fragment>
  );
}

export default App;
