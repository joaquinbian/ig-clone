/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {Linking, StyleSheet, View} from 'react-native';
import Amplify from 'aws-amplify';
import {MenuProvider} from 'react-native-popup-menu';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import config from 'src/aws-exports';
import Navigation from '@navigation/index';
import {AuthProvider} from '@context/AuthContext';
import Client from 'src/apollo/client';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as dayjs from 'dayjs';
dayjs.extend(relativeTime);

async function urlOpener(url: string, redirectUrl: string) {
  await InAppBrowser.isAvailable();
  const response = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (response.type === 'success') {
    Linking.openURL(response.url);
  }
}

const newConfig = {...config, oauth: {...config.oauth, urlOpener}};

Amplify.configure(newConfig);

const App = () => {
  return (
    <MenuProvider>
      <AuthProvider>
        <Client>
          <Navigation />
        </Client>
      </AuthProvider>
    </MenuProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
