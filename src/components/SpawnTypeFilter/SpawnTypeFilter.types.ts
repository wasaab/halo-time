type SpawnTypeFilterProps = {
  /** Current spawn type filters. */
  filters: string[];
  /** Callback fired when the filters change. */
  onChange: (types: string[]) => void;
};

export default SpawnTypeFilterProps;