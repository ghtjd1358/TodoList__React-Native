// module.exports = {
//     getTransformModulePath() {
//       return require.resolve("react-native-svg-transformer");
//     },
//     getSourceExts() {
//       return ["js", "jsx", "svgx"];
//     }
//   };

//   const { getDefaultConfig } = require("metro-config");

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts }
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve("react-native-svg-transformer")
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== "svg"),
//       sourceExts: [...sourceExts, "svg"]
//     }
//   };
// })();