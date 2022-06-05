import type { ChangeEvent } from 'react';

type Game = {
  /** Selected playlist. */
  playlist: string;
  /** Selected game mode. */
  mode: string;
  /** Selected map. */
  map: string;
};

type GameSelectProps = {
  /** Selected game. */
  game: Game;
  /** Callback fired when the selected game changes. */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default GameSelectProps;