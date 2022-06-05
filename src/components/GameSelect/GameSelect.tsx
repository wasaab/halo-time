import { Box, MenuItem, TextField } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { gameModes, mapToSpawns, playlists } from '../../model';
import { Elevation } from '../../styles/theme';
import type GameSelectProps from './GameSelect.types';

const useStyles = makeStyles()((theme) => ({
  selectContainer: {
    '& .MuiTextField-root': {
      boxShadow: theme.shadows[Elevation.Low]
    }
  }
}));

const formatLabel = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

const nameToOptions = {
  playlist: playlists,
  mode: gameModes,
  map:  Object.keys(mapToSpawns)
};

const GameSelect = ({ game, onChange }: GameSelectProps) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.selectContainer} display="flex" gap={1} pt={1}>
      {Object.keys(nameToOptions).map((name, i) => (
        <TextField
          key={name}
          select
          value={game[name]}
          label={formatLabel(name)}
          name={name}
          variant="outlined"
          fullWidth
          disabled={i < 2}
          onChange={onChange}
        >
          {nameToOptions[name].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      ))}
    </Box>
  );
};

export default GameSelect;