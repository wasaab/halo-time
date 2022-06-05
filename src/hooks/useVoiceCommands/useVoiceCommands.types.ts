type UseVoiceCommandsProps = {
  /** Selected map. */
  map: string;
  /** Selected spawn types. */
  spawnTypes: string[];
  /** Callback fired when command changes. */
  onCommandChange: (cmd: string | null) => void;
  /** Callback fired for start all timers command. */
  onStartAll: () => void;
};

export default UseVoiceCommandsProps;