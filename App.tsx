/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import {Linking, StyleSheet, View} from 'react-native';
import Amplify from 'aws-amplify';
import config from 'src/aws-exports';
import Navigation from '@navigation/index';
import {AuthProvider} from '@context/AuthContext';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import Client from 'src/apollo/client';

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
    <AuthProvider>
      <Client>
        <Navigation />
      </Client>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
