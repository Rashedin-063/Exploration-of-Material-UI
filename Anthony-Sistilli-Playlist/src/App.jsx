// import ButtonContainer from './components/ButtonContainer';
// import TypographyContainer from './components/TypographyContainer';

// import SxProp from "./components/SxProp";
import CircularIndeterminate from "./components/LoadingSpinner";
import Theming from "./components/Theming";


const App = () => {
  return (
    <div style={{minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {/* <ButtonContainer />
      <TypographyContainer/> */}
      {/* <SxProp/> */}
      {/* <Theming/> */}
      <CircularIndeterminate/>
      
    </div>
  );
};

export default App;
