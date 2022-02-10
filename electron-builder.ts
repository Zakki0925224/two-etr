import { build } from 'electron-builder';

build({
  config: {
    appId: 'com.two.app',
    productName: 'The World Order',
    copyright: '(c) 2022 Zakki',
    artifactName: 'The World Order-${version}-${platform}-${arch}.${ext}',
    files: ['dist/**/*'],
    directories: {
      output: 'release',
      buildResources: 'assets',
    },
    win: {
      icon: 'assets/icon.ico',
      target: ['nsis', 'zip'],
    },
    nsis: {
      oneClick: false,
      installerIcon: 'assets/installer.ico',
      artifactName: 'Sample-${version}-installer.${ext}',
    },
    mac: {
      identity: null,
      target: 'default',
      icon: 'assets/icon.icns',
    },
    dmg: {
      icon: 'assets/dmg.icns',
    },
    linux: {
      category: 'Utility',
    },
  },
});
