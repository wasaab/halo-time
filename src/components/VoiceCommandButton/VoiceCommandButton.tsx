import { Badge, Tooltip } from '@mui/material';
import { Mic as MicIcon, MicOff as MicOffIcon } from '@mui/icons-material';
import { makeStyles } from 'tss-react/mui';
import { ToggleTipButton } from '../';
import { Elevation } from '../../styles';
import { useVoiceCommands, type UseVoiceCommandsProps } from '../../hooks';
import { cmdTip } from '../../model';

const useStyles = makeStyles()((theme) => ({
  speechBubble: {
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[Elevation.High],
    marginTop: '16px !important'
  },
  arrow: {
    '&:before': {
      border: `2px solid ${theme.palette.primary.main}`
    }
  }
}));

const VoiceCommandButton = (props: UseVoiceCommandsProps) => {
  const { classes } = useStyles();
  const { listening, speaking, transcript, voiceSupported, toggleMic } = useVoiceCommands(props);

  return (
    <ToggleTipButton
      active={listening}
      disabled={!voiceSupported}
      inactiveComponent={<MicOffIcon />}
      activeComponent={(
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
          <Badge color="error" variant="dot">
            <MicIcon />
          </Badge>
        </Tooltip>
      )}
      tip={cmdTip}
      tipPlacement="right"
      onClick={toggleMic}
    />
  );
};

export default VoiceCommandButton;