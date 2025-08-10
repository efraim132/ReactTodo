import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ReactTodo/dist/', // <-- your repo name
  plugins: [react()],
})
