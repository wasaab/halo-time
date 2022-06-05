import {
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { spawnableTypes } from '../../model';
import type SpawnTypeFilterProps from './SpawnTypeFilter.types';

const formatTitle = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

const useStyles = makeStyles()((theme) => ({
  root: {
    boxShadow: theme.shadows[4]
  }
}));

const SpawnTypeFilter = ({ filters, onChange }: SpawnTypeFilterProps) => {
  const { classes } = useStyles();
  const isMobile = useMediaQuery('(max-width:430px)');

  return (
    <ToggleButtonGroup
      className={classes.root}
      value={filters}
      color="info"
      orientation={isMobile ? 'vertical' : 'horizontal'} // Todo: Not needed if I replace words with custom SvgIcons
      fullWidth
      aria-label="filters"
      onChange={(event, type) => onChange(type)}
    >
      {spawnableTypes.map((type, i) => (
        <ToggleButton key={type} value={type} disabled={i > 1} aria-label={type}>
          {formatTitle(type)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default SpawnTypeFilter;