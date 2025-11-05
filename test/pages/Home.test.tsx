import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/Home';

describe('Home', () => {
  it('renders the main heading', () => {
    render(<Home />);
    expect(screen.getByText('Engineer, Entrepreneur, Explorer')).toBeTruthy();
  });
});
