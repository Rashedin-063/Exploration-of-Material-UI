// import ButtonContainer2 from "./components/Button/ButtonContainer";
import ChipContainer from "./components/Chip/ChipContainer";



const App = () => {
  return (
    <main
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}
    >
      {/* <ButtonContainer2/> */}
      <ChipContainer/>
    </main>
  );
}
export default App