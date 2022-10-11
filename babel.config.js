module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {useTransformReactJSXExperimental: true},
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./'],
        alias: {
          '@components': './src/components', // path to your app folder,
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
          '@context': './src/context',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
