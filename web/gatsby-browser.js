import React from "react"

import { ThemeProvider } from "./src/contexts/ThemeContext"

export const wrapPageElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
