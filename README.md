# Closet (가명)

- 옷 정보를 쉽게 저장 관리 할 수 있는 어플
- 옷 정보와 코디, OOTD를 쉽게 공유 할 수 있는 새로운 SNS

[팀 노션 페이지](https://www.notion.so/prgrms/Team5-bded17286b6c47f4bccc46f88fef0c3d)

## 폴더 구조

```
-2-Project5-final-team5/
├── closet-web-app/                # 리액트 웹 애플리케이션
│   ├── public/
│   ├── src/
│   ├── .env                       # Supabase 설정 파일
│   ├── package.json
│   ├── README.md
│   └── ...                        # 기타 리액트 웹 애플리케이션 파일
│
├── ClosetHybridApp/               # 리액트 네이티브 하이브리드 앱
│   ├── android/
│   ├── ios/
│   ├── .env                       # Supabase 설정 파일
│   ├── App.js
│   ├── package.json
│   ├── README.md
│   └── ...                        # 기타 리액트 네이티브 파일
│
└── README.md                      # 프로젝트의 전체적인 README 파일
```

## 개발 및 실행 방법

### 폴더 구조에 맞게.env 파일 생성

```
REACT_APP_SUPABASE_URL= ;
REACT_APP_SUPABASE_ANON_KEY= ;
```

### 웹 애플리케이션

```bash
cd closet-web-app
npm start
```

### 리액트 네이티브 앱

```bash
cd ClosetHybridApp
npm start
```
