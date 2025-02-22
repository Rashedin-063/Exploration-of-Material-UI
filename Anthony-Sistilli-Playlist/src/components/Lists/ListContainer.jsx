// import BasicList from "./BasicList"
// import NestedList from "./NestedList"
// import FolderList from "./FolderList"
// import InteractiveList from "./InteractiveList"
import CheckboxList from "./CheckBoxList"
import SwitchListSecondary from "./SwitchList"

const ListContainer = () => {
  return (
    <div style={{border: '1px solid gray', borderRadius: '8px', padding: '1rem'}}>
      {/* <BasicList/> */}
      {/* <NestedList/> */}
      {/* <FolderList/> */}
      {/* <InteractiveList/> */}
      <CheckboxList />
      <SwitchListSecondary/>
    </div>
  )
}
export default ListContainer