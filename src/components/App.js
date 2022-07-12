import Header from "./Header";
import HomeMainSection from "./HomeMainSection";
import Sidebar from "./SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Sidebar />
        <HomeMainSection />
      </main>
    </div>
  );
}

export default App;
