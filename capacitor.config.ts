import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.stoic.manager',
  appName: 'stoic-manager',
  webDir: 'dist/stoic-manager',
  server: {
    androidScheme: 'https'
  }
};

export default config;
