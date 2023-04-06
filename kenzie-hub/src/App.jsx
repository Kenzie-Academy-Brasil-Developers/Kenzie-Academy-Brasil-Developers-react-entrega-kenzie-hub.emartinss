import { RoutesMain } from "./Routes/Routes";
import { GlobalStyle } from "./styles/globalStyles";
import { ResetCSS } from "./styles/reset";


function App() {
  return (
    <>
      <ResetCSS />
    <GlobalStyle/>
      <RoutesMain />
    </>
  );
}

export default App;
