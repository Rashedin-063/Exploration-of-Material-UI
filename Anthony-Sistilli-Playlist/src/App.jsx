// import ButtonContainer from './components/ButtonContainer';
// import TypographyContainer from './components/TypographyContainer';

import BoxContainer from "./components/Box/BoxContainer";

// import SimplePaper from "./components/Paper";
// import CardsContainer from "./components/CardsContainer";
// import HoverRating from "./components/Rating/HoverRating";
// import RadioGroupRating from "./components/Rating/RadioGroup";
// // import BasicRating from "./components/Rating/RatingStars";
// import CustomizedRating from "./components/Rating/StyledRating";

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
        gap: 10
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
      {/* <SimplePaper/> */}
      {/* <BasicRating /> */}
      {/* <HoverRating />
      <CustomizedRating />
      <RadioGroupRating/> */}
      {/* <CardsContainer/> */}
      <BoxContainer/>
    </div>
  );
};

export default App;
