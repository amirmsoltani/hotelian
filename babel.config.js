const fs = require('fs');
const alias = {};
fs.readdirSync('./src').forEach(item => {
  // if (!item.includes('.')) {
  alias[item] = './src/' + item;
  // }
});
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  'plugins': [
    [
      'module-resolver',
      {
        'root': ['./src'],
        alias,
      },
    ],
  ],
};
