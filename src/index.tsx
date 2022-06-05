import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { CssBaseline, ThemeProvider } from '@mui/material';
import darkTheme from './styles';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
const muiCache = createCache({
  key: 'mui',
  prepend: true
});

root.render(
  <StrictMode>
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);

function logPerformanceMetrics() {
  if (!process.env.METRICS) { return; }

  reportWebVitals(console.log);
}

logPerformanceMetrics();
