import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Hello header', () => {
  const { unmount } = render(<App />);
  unmount();
});
