# webpack-practice

## package.json 생성

`npm init -y`

## webpack과 webppack-cli 설치

`npm install webpack webpack-cli --save-dev`

## webpack의 번들링 실행

- webpack.config.js과 package.json 설정
- 아래 코드로 번들링 후 dist폴더에서 번들링 파일 확인
  `npm run build`
- index.html을 브라우저로 실행하여 결과확인하기

## loader를 통해 css파일을 모듈로 읽어오기

- 모듈 설치

  `npm install style-loader css-loader --save-dev`

- webpack.config.js에 STYLE와 CSS 설정
- 노멀라이즈 설치

  `npm install normalize.css --save`
