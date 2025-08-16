import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";
import { TravelList } from "./component/TravelList";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container main">
        <TravelList />
      </main>
      <Footer />
    </>
  );
};

export default App;
