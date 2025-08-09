import { Box } from "@primer/react";

function TodoList() {
  return (
    <Box as="ol" sx={{ 
        padding: 'var(--stack-padding-tight)',
        border: 'var(--borderWidth-thin) solid var(--borderColor-muted)',
        borderRadius: 'var(--borderRadius-medium)',
        backgroundColor: 'var(--bgColor-default)',
     }}>
      <li>Task 1</li>
      <li>Task 2</li>
      <li>Task 3</li>
    </Box>
  )
}



export default TodoList;