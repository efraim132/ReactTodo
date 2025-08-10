import { ActionMenu } from "@primer/react"
import { ActionList } from "@primer/react"


function TodoActionMenu() {
    return(
<ActionMenu>
  <ActionMenu.Button>Open menu</ActionMenu.Button>
  <ActionMenu.Overlay>
    <ActionList>
      <ActionList.Item
        onSelect={() => {
          alert('Reset clicked')
        }}
      >
        Reset
      </ActionList.Item>
      <ActionList.Item
        onSelect={() => {
          alert('Return to default clicked')
        }}
      >
        Return to default
      </ActionList.Item>
      <ActionList.Item
        onSelect={() => {
          alert('Add new task clicked')
        }}
      >
        Add new task
      </ActionList.Item>
    </ActionList>
  </ActionMenu.Overlay>
</ActionMenu>
)}
export default TodoActionMenu;