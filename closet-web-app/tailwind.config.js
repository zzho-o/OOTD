/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React 파일들에 적용되도록 설정
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // DaisyUI 플러그인 추가
};
