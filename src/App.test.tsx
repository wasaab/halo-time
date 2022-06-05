import { render, screen } from '@testing-library/react';
import App, { defaultGame } from './App';
import { Tip } from './components/VoiceCommandButton/VoiceCommandButton';
import { spawnableTypes } from './model/spawnable';

describe('App', () => {
  it('renders selects and buttons', () => {
    render(<App />);

    // game selects
    expect(screen.getByLabelText('Playlist')).toHaveTextContent(defaultGame.playlist);
    expect(screen.getByLabelText('Mode')).toHaveTextContent(defaultGame.mode);
    expect(screen.getByLabelText('Map')).toHaveTextContent(defaultGame.map);

    // spawn type filter buttons
    spawnableTypes.forEach((spawnType) => {
      expect(screen.getByLabelText(spawnType, { selector: 'button' })).toBeInTheDocument();
    });

    // voice action buttons
    expect(screen.getByLabelText('Start all timers', { selector: 'button' })).toBeInTheDocument();
    expect(screen.getByLabelText(Tip.VoiceUnsupported)).toBeInTheDocument();
  });
});
