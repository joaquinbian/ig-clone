import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
