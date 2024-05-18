import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Render the App component
  render(<App />);
  
  // Use the screen object provided by '@testing-library/react' to query for elements
  // Here, we're looking for an element that contains the text 'learn react' (case insensitive)
  const linkElement = screen.getByText(/learn react/i);
  
  // Expect the linkElement to be in the document (i.e., rendered on the screen)
  expect(linkElement).toBeInTheDocument();
});
