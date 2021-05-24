import react from 'react';
import NavigationBar from "./header/NavigationBar";
import { NewsStand, Contents } from "./App.style";
import SideBar from "./contents/SideBar";
import NewsCards from "./contents/NewsCards";

function App() {
  return (
      <NewsStand>
          <NavigationBar/>
          <Contents>
              <SideBar/>
              <NewsCards/>
          </Contents>
      </NewsStand>
  );
}

export default App;

