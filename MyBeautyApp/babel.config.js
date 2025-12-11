module.exports = function (api) {
<<<<<<< HEAD
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module:react-native-dotenv',
                {
                    moduleName: '@env',
                    path: '.env',
                    safe: false,
                    allowUndefined: true,
                },
            ],
        ],
    };
}
=======
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
   plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          safe: false,
          allowUndefined: false,
        },
      ],
      ],
  };
};
>>>>>>> origin/mybeautyapp-refactor
