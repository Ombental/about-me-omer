import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Resume from '../../src/pages/Resume';

describe('Resume', () => {
  it('renders the Key Ventures heading', () => {
    render(<Resume />);
    expect(screen.getByText('Key Ventures')).toBeTruthy();
  });
});
