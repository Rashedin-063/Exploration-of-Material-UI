import ButtonContainer2 from "./components/Button/ButtonContainer";



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
     <ButtonContainer2/>
    </main>
  );
}
export default App