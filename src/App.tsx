import {Button, Box, Heading, Stack} from '@primer/react'
import {MarkGithubIcon} from '@primer/octicons-react'
import MyActionMenu from './myActionMenu'
import './App.css'

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
        <MarkGithubIcon size={64} /> Primer + Vite + TS
      </Box>
      <Stack direction="vertical">
        <Button onClick={() => alert('Hello, Primer!')}>Click me</Button>
        <MyActionMenu />
      </Stack>
</Box>
      
      
    
      
    </>
  )
}
