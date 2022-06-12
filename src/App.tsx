import { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Tooltip,
  Typography
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import {
  NotificationsActive as NotificationsActiveIcon,
  NotificationsOff as NotificationsOffIcon,
  Timer as TimerIcon
} from '@mui/icons-material';
import ProgressTimer from 'react-progress-bar-timer';
import { GameSelect, SpawnTypeFilter, ToggleTipButton, VoiceCommandButton } from './components';
import { Elevation } from './styles';
import { playlists, mapToSpawns, gameModes, notificationTip } from './model';
import speak from './util';

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
  const [notify, setNotify] = useState(false);

  const handleSpawnTypesChange = (types) => {
    setSpawnTypes(types);
  };

  const handleGameChange = ({ target: { name, value } }) => {
    setGame({ ...game, [name]: value });
  };

  const handleSpawn = useCallback((name) => {
    if (!notify) { return; }

    speak(name);
  }, [notify]);

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

        <ToggleTipButton
          active={notify}
          disabled={!window?.speechSynthesis}
          inactiveComponent={<NotificationsOffIcon />}
          activeComponent={<NotificationsActiveIcon />}
          tip={notificationTip}
          onClick={() => setNotify(!notify)}
        />
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
              classes={{ root: classes.progressRoot }}
              onFinish={handleSpawn}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default App;