import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';

describe('App', () => {
  it('renders the app logo', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('img', { name: /x logo/i })).toBeTruthy();
  });

  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: /home/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /resume/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /contact/i })).toBeTruthy();
  });

  it('navigation links have correct href attributes', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: /home/i }).getAttribute('href')).toBe('/');
    expect(screen.getByRole('link', { name: /resume/i }).getAttribute('href')).toBe('/resume');
    expect(screen.getByRole('link', { name: /contact/i }).getAttribute('href')).toBe('/contact-info');
  });
});
