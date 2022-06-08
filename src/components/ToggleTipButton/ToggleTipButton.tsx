import { Button, Tooltip } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Elevation } from '../../styles';
import ToggleTipButtonProps from './ToggleTipButton.types';

const useStyles = makeStyles()((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[Elevation.High]
  },
  button: {
    '&.Mui-disabled': {
      pointerEvents: 'auto'
    }
  }
}));

const ToggleTipButton = ({
  active,
  disabled,
  inactiveComponent,
  activeComponent,
  tip,
  tipPlacement = 'bottom',
  onClick
}: ToggleTipButtonProps) => {
  const { classes } = useStyles();

  const getTip = () => {
    if (disabled) { return tip.unsupported; };

    return active ? tip.disable : tip.enable;
  }

  return (
    <Tooltip
      placement={tipPlacement}
      title={getTip()}
      classes={{ tooltip: classes.tooltip }}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        // allows tip to show on hover of disabled button
        component={disabled ? 'div' : undefined}
        className={classes.button}
      >
        {active ? activeComponent : inactiveComponent}
      </Button>
    </Tooltip>
  );
};

export default ToggleTipButton;