import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock';
import '@testing-library/jest-native/extend-expect';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('@react-native-firebase/messaging', () =>
  jest.fn(() => ({
    getToken: jest.fn(() => Promise.resolve('myMockToken')),
    requestPermission: jest.fn(() => Promise.resolve(1)),
    setBackgroundMessageHandler: jest.fn(),
    onMessage: jest.fn(),
    onNotificationOpenedApp: jest.fn(),
    getInitialNotification: jest.fn(),
    registerDeviceForRemoteMessages: jest.fn(),
  })),
);

jest.mock('react-native-permissions', () =>
  require('react-native-permissions/mock'),
);
