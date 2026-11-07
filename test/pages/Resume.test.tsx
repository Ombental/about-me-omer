import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Resume from '../../src/pages/Resume';

describe('Resume', () => {
  it('renders the What I Work With heading', () => {
    render(<Resume />);
    expect(screen.getByText('What I Work With')).toBeTruthy();
  });
});
