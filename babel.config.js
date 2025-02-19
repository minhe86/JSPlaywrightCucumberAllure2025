module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
        targets: {
          browsers: [],
          node: true,
        },
      },
    ],
  ],
  sourceMap: true,
};
