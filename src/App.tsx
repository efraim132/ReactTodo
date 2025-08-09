import {Button, Box, Heading, Stack} from '@primer/react'
import {MarkGithubIcon} from '@primer/octicons-react'
import TodoActionMenu from './todoActionMenu'
import './App.css'
import TodoList from './todoList'

export default function App() {
  return ( 
  <>
  
  <Box
  sx={{
    backgroundColor: 'var(--bgColor-inset)',
    borderRadius: 'var(--borderRadius-medium)',
    padding: 'var(--stack-padding-spacious)',
    border: 'var(--borderWidth-thin) solid var(--borderColor-muted)',
  }}
>
  <Box className="mb-2" as="h2" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <MarkGithubIcon size={64} /> Efraim's TODO App
      </Box>
      <Stack direction="vertical">
        <h3>Current Tasks</h3>
        <TodoList />
        <TodoActionMenu />
      </Stack>
</Box>
      
      
    
      
    </>
  )
}
