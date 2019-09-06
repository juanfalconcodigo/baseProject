const presets = [
  [
    "@babel/preset-react",
    {
      targets: {
        edge: "10",
        firefox: "60",
        chrome: "67",
        safari: "11.1"
      },
      useBuiltIns: "usage"
    }
  ]
];

module.exports = { presets };
