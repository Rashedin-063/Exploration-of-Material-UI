import BasicStack from "./BasicStack"
import DirectionStack from "./DirectionStack"
import DividerStack from "./DividerStack"

const StackContainer = () => {
  return (
    <div style={{backgroundColor: '#ccc', padding: '1rem', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <BasicStack />
      <DirectionStack />
      <DividerStack/>
    </div>
  )
}
export default StackContainer