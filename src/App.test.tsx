/* eslint-disable jest/no-conditional-expect */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App, { defaultGame } from './App';
import { mapToSpawns, spawnableTypes } from './model';
import { cmdTip, notificationTip } from './model';

function getMapSpawns(selectedMap: string) {
  return Object.values(mapToSpawns[selectedMap])
    .flatMap((spawns) => spawns);
}

function assertSpawnTimersDisplayed(selectedMap: string) {
  const expectedSpawns = getMapSpawns(selectedMap);

  expectedSpawns.forEach(({ name }) => {
    expect(screen.getByLabelText(name, { selector: 'button' })).toBeInTheDocument();
  });
}

function assertSpawnTimersState(selectedMap, isStarted) {
  const expectedSpawns = getMapSpawns(selectedMap);

  expectedSpawns.forEach(({ name }) => {
    expect(screen.getByText(name)).toBeInTheDocument();

    const { nextSibling } = screen.getByText(name);

    if (isStarted) {
      // Assert spawn timer shown as it is displayed when timer starts.
      expect(nextSibling).toHaveTextContent(/\d{2}:\d{2}/);
    } else {
      // Assert spawn timer not shown as it has not yet started.
      expect(nextSibling).toBeNull();
    }
  });
}

describe('App', () => {
  it('renders game selects, filter buttons, and action buttons', () => {
    render(<App />);

    // game selects
    expect(screen.getByLabelText('Playlist')).toHaveTextContent(defaultGame.playlist);
    expect(screen.getByLabelText('Mode')).toHaveTextContent(defaultGame.mode);
    expect(screen.getByLabelText('Map')).toHaveTextContent(defaultGame.map);

    // spawn type filter buttons
    spawnableTypes.forEach((spawnType) => {
      expect(screen.getByLabelText(spawnType, { selector: 'button' })).toBeInTheDocument();
    });

    // action buttons
    expect(screen.getByLabelText('Start all timers', { selector: 'button' })).toBeInTheDocument();
    expect(screen.getByLabelText(notificationTip.unsupported)).toBeInTheDocument();
    expect(screen.getByLabelText(cmdTip.unsupported)).toBeInTheDocument();
  });

  it('renders spawn type headers for enabled types', () => {
    render(<App />);

    spawnableTypes.forEach((spawnType) => {
      const typeFilterButton: HTMLButtonElement = screen.getByLabelText(spawnType, { selector: 'button' });
      const expectedHeaderText = `${spawnType[0].toUpperCase()}${spawnType.slice(1)}`;
      const typeHeader = screen.queryByRole('heading', { name: expectedHeaderText });

      if (typeFilterButton.disabled) {
        expect(typeHeader).not.toBeInTheDocument();
      } else {
        expect(typeHeader).toBeInTheDocument();
      }
    });
  });

  it('renders progress bars for spawns of default map', () => {
    render(<App />);

    assertSpawnTimersDisplayed(defaultGame.map);
  });

  it.each(
    Object.keys(mapToSpawns).slice(1)
  )('renders progress bars for spawns of map "%s" when it\'s selected', async (selectedMap) => {
    render(<App />);

    await userEvent.click(screen.getByLabelText('Map'));
    await userEvent.click(screen.getByRole('option', { name: selectedMap }));

    assertSpawnTimersDisplayed(selectedMap);
  });

  it('starts all timers when button is clicked', async () => {
    render(<App />);

    assertSpawnTimersState(defaultGame.map, false);
    await userEvent.click(screen.getByLabelText('Start all timers'));
    assertSpawnTimersState(defaultGame.map, true);
  });
});
