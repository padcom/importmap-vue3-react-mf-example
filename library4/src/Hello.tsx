import React from 'react'

interface HelloProps {
  /** Name of the person to greet */
  name: string
}

export const Hello: React.FC<HelloProps> = ({ name } = { name: 'John' }) => {
  return <h1>React.js: {name} (library4)</h1>
}
