import { render, screen } from '@testing-library/react'
import App from '../../src/App'
import { expect, test } from 'vitest'

test('renders the App component', () => {
  render(<App />)

  const title = screen.getByRole('heading', { name: /Vite \+ React/i })

  expect(title).toBeInTheDocument()
})
