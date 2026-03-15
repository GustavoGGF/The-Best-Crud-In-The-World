module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/, // Se estiver usando .css
        use: [
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        ],
      },
    ],
  },
};
