// // tailwind.config.js
// module.exports = {
//     theme: {
//       extend: {
//         colors: {
//           primary: {
//             DEFAULT: '#712779',
//             dark: '#5a1f61',
//           },
//           secondary: '#efe8d5',
//           accent: '#f9f5ed',
//         },
//       },
//     },
//   }

// tailwind.config.js
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
              extend: {
                colors: {
                  primary: {
                    DEFAULT: '#712779',
                    dark: '#5a1f61',
                  },
                  secondary: '#efe8d5',
                  accent: '#f9f5ed',
                },
              },
            },
    
    plugins: [],
  }
  