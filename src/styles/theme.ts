import { createTheme } from '@mui/material';

export enum Elevation {
  Low = 4,
  High = 6
}

const darkTriangleGradiant =
  `linear-gradient(
    292deg,
    #96969608 0%,
    #96969608 20%,
    #97979708 20%,
    #97979708 40%,
    #d7d7d708 40%,
    #d7d7d708 60%,
    #fefefe08 60%,
    #fefefe08 80%,
    #70707008 80%,
    #70707008 100%
  ),
  linear-gradient(
    62deg,
    #22222208 0%,
    #22222208 20%,
    #ababab08 20%,
    #ababab08 40%,
    #cecece08 40%,
    #cecece08 60%,
    #d2d2d208 60%,
    #d2d2d208 80%,
    #45454508 80%,
    #45454508 100%
  ),
  linear-gradient(
    314deg,
    #ebebeb08 0%,
    #ebebeb08 20%,
    #fefefe08 20%,
    #fefefe08 40%,
    #b2b2b208 40%,
    #b2b2b208 60%,
    #d3d3d308 60%,
    #d3d3d308 80%,
    #49494908 80%,
    #49494908 100%
  ),
  linear-gradient(
    32deg,
    #b6b6b603 0%,
    #b6b6b603 12.5%,
    #d0d0d003 12.5%,
    #d0d0d003 25%,
    #b2b2b203 25%,
    #b2b2b203 37.5%,
    #8f8f8f03 37.5%,
    #8f8f8f03 50%,
    #d3d3d303 50%,
    #d3d3d303 62.5%,
    #5c5c5c03 62.5%,
    #5c5c5c03 75%,
    #38383803 75%,
    #38383803 87.5%,
    #fdfdfd03 87.5%,
    #fdfdfd03 100%
  ),
  linear-gradient(
    247deg,
    #67676705 0%,
    #67676705 12.5%,
    #f0f0f005 12.5%,
    #f0f0f005 25%,
    #12121205 25%,
    #12121205 37.5%,
    #26262605 37.5%,
    #26262605 50%,
    #f6f6f605 50%,
    #f6f6f605 62.5%,
    #09090905 62.5%,
    #09090905 75%,
    #a7a7a705 75%,
    #a7a7a705 87.5%,
    #56565605 87.5%,
    #56565605 100%
  ),
  linear-gradient(90deg, #1a1a1a, #1a1a1a)`;

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: 'rgba(255, 255, 255, 0.85)'
    },
    background: {
      default: '#303030'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%'
        },
        body: {
          backgroundImage: darkTriangleGradiant
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#284d72',
          borderRadius: 4
        },
        '*::-webkit-scrollbar': {
          width: 12
        },
        '*::-webkit-scrollbar-track': {
          backgroundColor: 'rgba(255,255,255,0.06)',
        }
      }
    }
  }
});

export default darkTheme;