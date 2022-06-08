import type { ReactNode } from 'react';
import type { TooltipProps } from '@mui/material';
import type { VoiceTip } from '../../model';

type ToggleTipButtonProps = {
  /** Whether the button is toggled to active state. */
  active: boolean;
  /** Whether the button is disabled. */
  disabled: boolean;
  /** Cponent displayed within the button when inactive. */
  inactiveComponent: ReactNode;
  /** Component displayed within the button when active. */
  activeComponent: ReactNode;
  /** Mapping of tips shown on hover for all 3 button states. */
  tip: VoiceTip;
  /** Placement of the tip in relation to the button. */
  tipPlacement?: TooltipProps['placement'];
  /** Callback fired when the button is clicked. */
  onClick: () => void;
};

export default ToggleTipButtonProps;