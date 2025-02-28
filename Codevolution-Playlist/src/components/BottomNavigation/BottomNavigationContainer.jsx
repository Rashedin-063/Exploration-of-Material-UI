import FixedBottomNavigation from "./FixedBottomNavigation"
import LabelBottomNavigation from "./LabelBottomNavigation"
import SimpleBottomNavigation from "./SimpleBottomNavigation"

const BottomNavigationContainer = () => {
  return (
    <div style={{position: 'relative'}}>
      <SimpleBottomNavigation />
      <LabelBottomNavigation />
      <FixedBottomNavigation/>
    </div>
  )
}
export default BottomNavigationContainer