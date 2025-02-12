// import ButtonContainer from './components/ButtonContainer';
// import TypographyContainer from './components/TypographyContainer';

import SimplePaper from "./components/Paper";

// import SxProp from "./components/SxProp";
// import CircularIntegration from "./components/InteractiveProgress";
// import LinearIndeterminate, { LinearBuffer } from "./components/LinearProgress";
// import CircularIndeterminate from "./components/LoadingSpinner";
// import Theming from "./components/Theming";


const App = () => {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 100
      }}
    >
      {/* <ButtonContainer />
      <TypographyContainer/> */}
      {/* <SxProp/> */}
      {/* <Theming/> */}
      {/* <CircularIndeterminate/> */}
      {/* <CircularIntegration />
      <LinearIndeterminate />
      <LinearBuffer/> */}
      <SimplePaper/>
    </div>
  );
};

export default App;
