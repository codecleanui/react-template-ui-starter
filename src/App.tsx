
import { Fragment } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { Notifications } from '@mantine/notifications';
import { useLocalStorage } from '@mantine/hooks';
import { router } from "./routes";
import { myTheme } from './themeManagment';
import { Fallback } from './pages'
import { ModalsProvider } from '@mantine/modals';


function App() {

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light', 
    getInitialValueInEffect: true,
  });



  return (
    <ColorSchemeProvider colorScheme={colorScheme} 
    toggleColorScheme =
    {
      (value?: ColorScheme) =>
       setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
    }>
      <MantineProvider theme={{ ...myTheme, colorScheme }} withGlobalStyles withNormalizeCSS withCSSVariables inherit>
        <Notifications/>
          <Fragment>
             <ModalsProvider>
                <RouterProvider router={router} fallbackElement={<Fallback />} />
            </ModalsProvider>
          </Fragment>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
 
export default App
