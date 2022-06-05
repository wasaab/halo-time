import { Badge, Button, Tooltip } from '@mui/material';
import { Mic as MicIcon, MicOff as MicOffIcon } from '@mui/icons-material';
import { makeStyles } from 'tss-react/mui';
import { Elevation } from '../../styles/theme';
import { useVoiceCommands, type UseVoiceCommandsProps } from '../../hooks/useVoiceCommands';

export enum Tip {
  EnableVoice = 'Enable "start ____" voice commands',
  DisableVoice = 'Disable voice commands',
  VoiceUnsupported = 'Voice commands are not supported by your browser'
}

const useStyles = makeStyles()((theme) => ({
  speechBubble: {
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[Elevation.High],
    marginTop: '16px !important'
  },
  tooltip: {
    boxShadow: theme.shadows[Elevation.High]
  },
  arrow: {
    '&:before': {
      border: `2px solid ${theme.palette.primary.main}`
    }
  },
  micButton: {
    '&.Mui-disabled': {
      pointerEvents: 'auto'
    }
  }
}));

const VoiceCommandButton = (props: UseVoiceCommandsProps) => {
  const { classes } = useStyles();
  const { listening, speaking, transcript, voiceSupported, toggleMic } = useVoiceCommands(props);

  const getVoiceTip = () => {
    if (!voiceSupported) { return Tip.VoiceUnsupported; };

    return listening ? Tip.DisableVoice : Tip.EnableVoice;
  }

  return (
    <Tooltip placement="right" title={getVoiceTip()} classes={{ tooltip: classes.tooltip }}>
      <Button
        onClick={toggleMic}
        disabled={!voiceSupported}
        component={voiceSupported ? undefined : 'div'}
        className={classes.micButton}
      >
        <Tooltip
          title={`"${transcript}"`}
          open={speaking}
          placement="bottom-start"
          classes={{
            tooltip: classes.speechBubble,
            arrow: classes.arrow
          }}
          arrow
          disableInteractive
        >
          {listening ? (
            <Badge color="error" variant="dot">
              <MicIcon />
            </Badge>
          ) : (
            <MicOffIcon />
          )}
        </Tooltip>
      </Button>
    </Tooltip>
  );
};

export default VoiceCommandButton;