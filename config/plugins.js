// module.exports = {
//     // ...
//     'seo': {
//       enabled: true,
//       resolve: './src/plugins/seo'
//     },
//     // ...
//     // 'seo-backup':{
//     //     enabled:false,
//     //     resolve:'.src/plugins/seo-backup'
//     // },

//     upload: {
//       config: {
//         provider: 'cloudinary',
//         providerOptions: {
//           cloud_name: env('CLOUDINARY_NAME'),
//           api_key: env('CLOUDINARY_KEY'),
//           api_secret: env('CLOUDINARY_SECRET'),
//         },
//         actionOptions: {
//           upload: {},
//           delete: {},
//         },
//       },
//     },

//   }
module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});

// module.exports = {
//   // ...
//   upload: {
//     config: {
//       sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
//     }
//   }
// };
