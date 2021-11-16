import React from 'react';
import { render } from '@testing-library/react';
import { BasicButton2 } from './button2.composition';


it('should render with the correct text', () => {
  const { getByText } = render(<BasicButton2 />);
  const rendered = getByText('hello from Button2');
  expect(rendered).toBeTruthy();
});

