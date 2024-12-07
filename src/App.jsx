import { Header } from "./components/header/Header";
import { Profile } from "./components/profile/Profile";
import { Listing } from "./components/listing/Listing";

const App = () => {
  return (
    <div>
      <Header />
      <div className="row g-0 global__content__wrapper">
        <div className="col-lg-3">
          <Profile />
        </div>
        <div className="col-lg-9 ps-4">
          <Listing />
        </div>
      </div>
    </div>
  );
};

export default App;
