import 'regenerator-runtime/runtime';
import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Tooltip,
  Typography
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Timer as TimerIcon } from '@mui/icons-material';
import { GameSelect, SpawnTypeFilter, VoiceCommandButton } from './components';
import { Elevation } from './styles';
import { playlists, mapToSpawns, gameModes } from './model';
import ProgressTimer from 'react-progress-bar-timer';

const useStyles = makeStyles()((theme) => ({
  progressRoot: {
    boxShadow: theme.shadows[Elevation.Low]
  },
  selectContainer: {
    '& .MuiTextField-root': {
      boxShadow: theme.shadows[Elevation.Low]
    }
  },
  buttonContainer: {
    boxShadow: theme.shadows[Elevation.Low],
    alignSelf: 'center',
    '& .MuiButton-root': {
      padding: '10px 21px'
    }
  },
  tooltip: {
    boxShadow: theme.shadows[Elevation.High]
  }
}));

export const defaultGame = {
  playlist: playlists[0],
  mode: gameModes[0],
  map: Object.keys(mapToSpawns)[0]
};

const formatTitle = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;

const App = () => {
  const { classes } = useStyles();
  const [game, setGame] = useState(defaultGame);
  const [spawnTypes, setSpawnTypes] = useState(['vehicles', 'weapons']);
  const [started, setStarted] = useState(null);
  const [cmd, setCmd] = useState(null);

  const handleSpawnTypesChange = (types) => {
    setSpawnTypes(types);
  };

  const handleGameChange = ({ target: { name, value } }) => {
    setGame({ ...game, [name]: value });
  };

  const startAllTimers = () => {
    setStarted(true);
  };

  useEffect(() => {
    if (started === null) { return; }

    setStarted(null);
  }, [started]);

  return (
    <Box display="flex" flexDirection="column" gap={1} p={2}>
      <GameSelect game={game} onChange={handleGameChange} />

      <SpawnTypeFilter filters={spawnTypes} onChange={handleSpawnTypesChange} />

      <ButtonGroup className={classes.buttonContainer} variant="outlined" size="large">
        <Tooltip placement="left" title="Start all timers" classes={{ tooltip: classes.tooltip }}>
          <Button onClick={startAllTimers}>
            <TimerIcon />
          </Button>
        </Tooltip>

        <VoiceCommandButton
          map={game.map}
          spawnTypes={spawnTypes}
          onCommandChange={setCmd}
          onStartAll={startAllTimers}
        />
      </ButtonGroup>

      {spawnTypes.map((spawnType) => (
        <Box key={spawnType} display="flex" flexDirection="column" gap={1} mt={3}>
          <Typography mb={0.5} fontWeight={500} variant="h5">
            {formatTitle(spawnType)}
          </Typography>

          {mapToSpawns[game.map][spawnType]?.map((spawn) => (
            <ProgressTimer
              key={`${game.map}-${spawn.name}`}
              label={spawn.name}
              duration={spawn.respawnSecs}
              started={cmd === spawn.name || started}
              color="#1976d2"
              fontColor="rgba(255, 255, 255, 0.85)"
              classes={{ root: classes.progressRoot }}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default App;