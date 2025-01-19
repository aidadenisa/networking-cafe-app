import { afterEach, describe, expect, Mock, test, vi } from 'vitest';
import { getInterests } from '../../services/interestService';
import { render, cleanup, screen } from '@testing-library/react';

import { InterestsSelector } from './InterestsSelector';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

vi.mock('../../services/interestService', () => ({
  getInterests: vi.fn(),
}));

afterEach(() => {
  cleanup();
});

const createWrapper = () => {
  // creates a new QueryClient for each test
  const queryClient = new QueryClient();
  return ({ children }: { children: any }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('InterestSelector', () => {
  test('gets the list of interests and displays it', async () => {
    (getInterests as Mock).mockResolvedValue([
      'technology',
      'economy',
      'software engineering',
      'AI',
    ]);

    render(<InterestsSelector setInterests={vi.fn()} />, {
      wrapper: createWrapper(),
    });
    const buttons = await screen.findAllByRole('button');

    expect(buttons.length).toBe(4);
    expect(screen.findByText('technology')).toBeDefined();
    expect(screen.findByText('economy')).toBeDefined();
    expect(screen.findByText('software engineering')).toBeDefined();
    expect(screen.findByText('AI')).toBeDefined();
  });

  test('shows default interests as selected', async () => {
    (getInterests as Mock).mockResolvedValue([
      'technology',
      'economy',
      'software engineering',
      'AI',
    ]);

    const defaultInterests = ['technology', 'economy'];

    render(
      <InterestsSelector
        defaultInterests={defaultInterests}
        setInterests={vi.fn()}
      />,
      {
        wrapper: createWrapper(),
      }
    );
    const buttons = await screen.findAllByRole('button');

    expect(buttons.length).toBe(4);
    expect((await screen.findByText('technology')).className).toContain(
      'selected'
    );
    expect((await screen.findByText('economy')).className).toContain(
      'selected'
    );
    expect(screen.findByText('software engineering')).toBeDefined();
    expect(screen.findByText('AI')).toBeDefined();
  });
});
