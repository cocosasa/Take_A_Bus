# Take A Bus (TAB) 
## 버스 정류장 승차벨 알림 키오스크

<div align="center">
<img width="329" alt="image" src="https://i9d111.p.ssafy.io/TAB_logo.png?url">
 
</div>

# Take A Bus (TAB)

> **삼성청년SW아카데미(SSAFY)** <br/> **개발기간: 2023.07.04 ~ 2023.8.18**

## 배포 주소

> **프론트 서버** : [https://i9d111.p.ssafy.io](https://i9d111.p.ssafy.io) <br> **백엔드 서버** : [https://i9d111.p.ssafy.io/tab](https://i9d111.p.ssafy.io/tab)<br> **실시간 키오스크** : [https://i9d111.p.ssafy.io/kiosk/auth](https://i9d111.p.ssafy.io/kiosk/auth)<br> 


## 개발팀 소개

|                                                            신지훈                                                             |                                                            성연석                                                             |                                                            송민철                                                            |                                                            신제형                                                             |                                                            이정훈                                                             |
| :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| <img width="100px" src="https://github.com/mincheolsong/mincheolsong/assets/80660585/c360d31a-8cb9-4fce-b222-36a0fecdd823" /> | <img width="100px" src="https://github.com/mincheolsong/mincheolsong/assets/80660585/3979382c-5861-47e6-911f-acb04f291d08" /> | <img width="100px" src="https://github.com/mincheolsong/mincheolsong/assets/80660585/80c14b21-1c83-4cd9-a468-16a1b788e42e"/> | <img width="100px" src="https://github.com/mincheolsong/mincheolsong/assets/80660585/92b88fb9-cedb-44d5-b927-3790a0bad669" /> | <img width="100px" src="https://github.com/mincheolsong/mincheolsong/assets/80660585/fe025bdc-e1b6-494b-a8c3-320facb3a783" /> |
|                                         [@wlgns1718](https://lab.ssafy.com/wlgns1718)                                         |                                          [@abcd9351](https://lab.ssafy.com/abcd9351)                                          |                                      [@thdalscjf05](https://lab.ssafy.com/thdalscjf05)                                       |                                        [@tlswpgud22](https://lab.ssafy.com/tlswpgud22)                                        |                                        [@wjdgns0631](https://lab.ssafy.com/wjdgns0631)                                        |
|                                                            BackEnd                                                            |                                                            BackEnd                                                            |                                                           BackEnd                                                            |                                                           FrontEnd                                                            |                                                           FrontEnd                                                            |


## 프로젝트 소개

TAB은 승차벨 기능이 있는 버스정류장 키오스크와, 다양한 웹 서비스를 제공합니다.

#### 탑승객은 승차벨 버튼을 눌러 탑승의사를 표현할 수 있습니다.

정류장 키오스크에 승차 버튼을 클릭하여 승객은 승차의사를 표현합니다. 교통약자 또한 하단의 버튼을 통해 승차 버튼을 클릭할 수 있습니다. 버스기사는 라즈베리파이에 전송된 데이터를 바탕으로 승차여부를 확인할 수 있습니다.

#### 버스와 관련된 다양한 웹 서비스를 제공합니다.

- 자유게시판, 공지사항
  - 승객들은 자유게시판에서 소통할 수 있으며, 공지사항을 통해 버스에 대한 정보를 얻을 수 있습니다.
- 노선 수요조사
  - 승객들은 원하는 노선에 설문을 실시하여 의견을 제시할 수 있습니다.
- 수요조사 데이터 시각화
  - 승객들이 실시한 설문을 히트맵 방식으로 시각화하여 관리자가 손쉽게 파악할 수 있습니다.
- 노선별 관광지/맛집 정보
  - 승객들은 선택한 노선에 대한 관광지, 문화시설, 축제공연행사, 여행코스, 레포츠, 숙박, 쇼핑, 음식점에 대한 정보를 얻을 수 있습니다.

## 시작 가이드

### Requirements

For building and running the application you need:

- [Node.js 18.16.0](https://nodejs.org/ca/blog/release/v18.16.0)
- [SpringBoot 2.7.13](https://spring.io/blog/2023/06/22/spring-boot-2-7-13-available-now)
- [Java 1.8](https://www.oracle.com/kr/java/technologies/javase/javase8-archive-downloads.html)
- [MySql](https://dev.mysql.com/downloads/installer/)

### Installation

```bash
$ git clone https://lab.ssafy.com/s09-webmobile3-sub2/S09P12D111.git
```

#### Backend

```
$ cd Backend
$ [update] build.gradle
$ [Run TabApplication]
```

#### Frontend

```
$ cd Frontend
$ npm install
$ npm run dev
```

---

## Stacks 🐈

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![IntelliJ](https://img.shields.io/badge/IntelliJ-181717?style=for-the-badge&logo=intellijidea&logoColor=#000000)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![gitlab](https://img.shields.io/badge/gitlab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=BLACK)

### CI/CD

![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AmazonEC2](https://img.shields.io/badge/AmazonEC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)

### Development

![TypeScript](https://img.shields.io/badge/TypeScript-F7DF1E?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![redux](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=61DAFB)
![SpringBoot](https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=SpringBoot&logoColor=black)
![springsecurity](https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![MySql](https://img.shields.io/badge/MySql-4479A1?style=for-the-badge&logo=MySql&logoColor=black)
![Raspberrypi](https://img.shields.io/badge/Raspberrypi-A22846?style=for-the-badge&logo=Raspberrypi&logoColor=black)

### Communication

![Jira](https://img.shields.io/badge/jira-4A154B?style=for-the-badge&logo=jirasoftware&logoColor=blue)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)

---

## 화면 구성 📺

|                                                       로그인 페이지                                                        |                                                      회원가입 페이지                                                       |
| :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
 <img width="600" src="https://github.com/mincheolsong/mincheolsong/assets/80660585/4043b9e4-09b3-4d9d-b6a9-58037efee0ed"/> | <img width="600" src="https://github.com/mincheolsong/mincheolsong/assets/80660585/5b86e309-4ace-479b-a8ec-49767e713643"/> |
|                                                   정류장 키오스크 페이지                                                   |                                                노선 별 관광/맛집 추천 기능                                                 |     |
| <img width="600" src="https://github.com/mincheolsong/mincheolsong/assets/80660585/9d69109f-6ea4-4f3a-9be2-94c467e7668f"/> | <img width="600" src="https://github.com/mincheolsong/mincheolsong/assets/80660585/934dc44e-7dce-4323-b47a-e0365bf30b1a"/> |
|                                                           게시판                                                           |                                                          공지사항                                                          |
| <img width="700" src="https://github.com/mincheolsong/mincheolsong/assets/80660585/a67769b2-41fa-437d-9dd5-52807ae67dd1"/> | <img width="700" src="https://github.com/mincheolsong/mincheolsong/assets/80660585/78a2d5b7-74b5-40aa-bd90-a579cb7a6b74"/> |
|                                                     게시물 작성 페이지                                                     |                                                    수요조사 결과 페이지                                                    |
| <img width="800" src="https://github.com/mincheolsong/mincheolsong/assets/80660585/b020306a-315e-4ff5-ad0f-266305eea7f7"/> | <img width="700" src="https://github.com/mincheolsong/mincheolsong/assets/80660585/66faeb6b-02f6-48a3-94a5-7c6d12e783e9"/> |

## 시연 영상 📺

### 정류장 키오스크 시연

[![TAB](http://img.youtube.com/vi/Uo2cmRsgWEA/0.jpg)](https://youtu.be/Uo2cmRsgWEA)

### 웹 서비스 시연
[![TAB](http://img.youtube.com/vi/W16VZ3EgW0g/0.jpg)](https://youtu.be/W16VZ3EgW0g)



---

## 주요 기능 📦

### ⭐️ 라즈베리파이를 통한 승차 알림벨 기능

- 키오스크의 승차버튼을 통해 버스기사에게 승차여부를 알릴 수 있는 기능

### ⭐️ 공공API를 활용한 도착정보 실시간 확인 기능

- 현재 정류장에 도착 예정인 버스를 실시간으로 조회하는 기능

### ⭐️ 노선 수요조사와 데이터 시각화

- 카카오맵 API를 이용하여 노선에 대한 수요조사를 실시하고 구글맵 API, 네이버 클라우드 플랫폼을 활용하여 수요조사 결과 데이터를 히트맵 방식으로 시각화 하는 기능

### ⭐️ 노선 별 관광/맛집 추천 기능

- 공공API와 거리 알고리즘을 활용한 정류장 별 관광/맛집 추천 기능

## 부가 기능 📦

### 🌕 카카오 로그인 기능

- OAuth를 활용하여 카카오 로그인 기능

### 🌕 SpringSecurity를 활용한 인증과 인가

- SpringSecurity를 활용하여 사용자 인증과 인가 기능

### 🌕 게시판 CRUD와 댓글 기능

- React, SpringBoot를 활용하여 게시판과 댓글 CRUD 기능

---

## 아키텍쳐

![image](https://github.com/mincheolsong/mincheolsong/assets/80660585/07e5456e-3cc3-4817-a426-15da6598950c)

## 디렉토리 구조

- 프론트엔드

```bash
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂kiosk
 ┃ ┃ ┣ 📂ArrivalBusList
 ┃ ┃ ┃ ┣ 📜ArrivalBusList.css
 ┃ ┃ ┃ ┣ 📜ArrivalBusList.props.ts
 ┃ ┃ ┃ ┣ 📜ArrivalBusList.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂ArrivalBusListItem
 ┃ ┃ ┃ ┣ 📜ArrivalBusListItem.css
 ┃ ┃ ┃ ┣ 📜ArrivalBusListItem.props.ts
 ┃ ┃ ┃ ┣ 📜ArrivalBusListItem.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂BottomButtonBox
 ┃ ┃ ┃ ┣ 📜BottomButtonBox.css
 ┃ ┃ ┃ ┣ 📜BottomButtonBox.props.ts
 ┃ ┃ ┃ ┣ 📜BottomButtonBox.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂ComingSoonBusList
 ┃ ┃ ┃ ┣ 📜ComingSoonBusList.css
 ┃ ┃ ┃ ┣ 📜ComingSoonBusList.props.ts
 ┃ ┃ ┃ ┣ 📜ComingSoonBusList.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂KioskHeader
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜KioskHeader.css
 ┃ ┃ ┃ ┣ 📜KioskHeader.props.ts
 ┃ ┃ ┃ ┗ 📜KioskHeader.tsx
 ┃ ┃ ┗ 📂LivingInfomationBox
 ┃ ┃ ┃ ┣ 📂DustBox
 ┃ ┃ ┃ ┃ ┣ 📜DustBox.css
 ┃ ┃ ┃ ┃ ┣ 📜DustBox.props.ts
 ┃ ┃ ┃ ┃ ┣ 📜DustBox.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📂QRcodeBox
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜QRcodeBox.css
 ┃ ┃ ┃ ┃ ┣ 📜QRcodeBox.props.ts
 ┃ ┃ ┃ ┃ ┗ 📜QRcodeBox.tsx
 ┃ ┃ ┃ ┣ 📂WeatherBox
 ┃ ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜WeatherBox.css
 ┃ ┃ ┃ ┃ ┣ 📜WeatherBox.props.ts
 ┃ ┃ ┃ ┃ ┗ 📜WeatherBox.tsx
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜LivingInfomationBox.css
 ┃ ┃ ┃ ┣ 📜LivingInfomationBox.tsx
 ┃ ┃ ┃ ┗ 📜LivingInformation.props.ts
 ┃ ┗ 📂web
 ┃ ┃ ┣ 📂BoardTable
 ┃ ┃ ┃ ┣ 📜BoardTable.props.ts
 ┃ ┃ ┃ ┣ 📜BoardTable.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂CommentItem
 ┃ ┃ ┃ ┣ 📜CommentItem.props.ts
 ┃ ┃ ┃ ┣ 📜CommentItem.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂NoticeTable
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜NoticeTable.props.ts
 ┃ ┃ ┃ ┗ 📜NoticeTable.tsx
 ┃ ┃ ┗ 📂WebHeader
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜WebHeader.css
 ┃ ┃ ┃ ┣ 📜WebHeader.props.ts
 ┃ ┃ ┃ ┗ 📜WebHeader.tsx
 ┣ 📂fonts
 ┃ ┣ 📜font.css
 ┃ ┗ 📜Inter.ttf
 ┣ 📂pages
 ┃ ┣ 📂kiosk
 ┃ ┃ ┣ 📂AuthPage
 ┃ ┃ ┃ ┣ 📂keyboard
 ┃ ┃ ┃ ┃ ┗ 📜keyBoard.tsx
 ┃ ┃ ┃ ┣ 📜AuthPage.css
 ┃ ┃ ┃ ┣ 📜AuthPage.props.ts
 ┃ ┃ ┃ ┣ 📜AuthPage.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📂BusInfomationPage
 ┃ ┃ ┃ ┣ 📜BusInfomationPage.props.ts
 ┃ ┃ ┃ ┣ 📜BusInfomationPage.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂mobile
 ┃ ┃ ┗ 📂MobileMain
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜MobileMain.css
 ┃ ┃ ┃ ┣ 📜MobileMain.props.ts
 ┃ ┃ ┃ ┗ 📜MobileMain.tsx
 ┃ ┗ 📂webpage
 ┃ ┃ ┣ 📂Web404Page
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜Web404Page.props.ts
 ┃ ┃ ┃ ┗ 📜Web404Page.tsx
 ┃ ┃ ┣ 📂WebBoardDetailPage
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜WebBoardDetailPage.props.ts
 ┃ ┃ ┃ ┗ 📜WebBoardDetailPage.tsx
 ┃ ┃ ┣ 📂WebBoardPage
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜WebBoard.css
 ┃ ┃ ┃ ┣ 📜WebBoardPage.props.ts
 ┃ ┃ ┃ ┗ 📜WebBoardPage.tsx
 ┃ ┃ ┣ 📂WebBoardPostPage
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜WebBoardPostPage.css
 ┃ ┃ ┃ ┣ 📜WebBoardPostPage.props.ts
 ┃ ┃ ┃ ┗ 📜WebBoardPostPage.tsx
 ┃ ┃ ┣ 📂WebLoginPage
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜WebLogin.css
 ┃ ┃ ┃ ┣ 📜WebLoginPage.props.ts
 ┃ ┃ ┃ ┗ 📜WebLoginPage.tsx
 ┃ ┃ ┣ 📂WebMainPage
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜WebMainPage.css
 ┃ ┃ ┃ ┣ 📜WebMainPage.props.ts
 ┃ ┃ ┃ ┗ 📜WebMainPage.tsx
 ┃ ┃ ┣ 📂WebNoticeDetailPage
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜WebNoticeDetailPage.css
 ┃ ┃ ┃ ┣ 📜WebNoticeDetailPage.props.ts
 ┃ ┃ ┃ ┗ 📜WebNoticeDetailPage.tsx
 ┃ ┃ ┣ 📂WebRecommendPage
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜WebRecommendPage.props.ts
 ┃ ┃ ┃ ┗ 📜WebRecommendPage.tsx
 ┃ ┃ ┣ 📂WebSignupPage
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜WebSignup.css
 ┃ ┃ ┃ ┣ 📜WebSignupPage.props.ts
 ┃ ┃ ┃ ┗ 📜WebSignupPage.tsx
 ┃ ┃ ┣ 📂WebSurveyPage
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜WebSurveyPage.props.ts
 ┃ ┃ ┃ ┗ 📜WebSurveyPage.tsx
 ┃ ┃ ┗ 📜Kakaopage.tsx
 ┣ 📂store
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜api.ts
 ┃ ┣ 📂slice
 ┃ ┃ ┣ 📜kiosk-slice.ts
 ┃ ┃ ┗ 📜web-slice.ts
 ┃ ┗ 📜store.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts

```

- 백엔드

```bash
├─.gradle
│  ├─8.1.1
│  │  ├─checksums
│  │  ├─dependencies-accessors
│  │  ├─executionHistory
│  │  ├─fileChanges
│  │  ├─fileHashes
│  │  └─vcsMetadata
│  ├─buildOutputCleanup
│  └─vcs-1
├─.idea
│  └─modules
├─build
│  ├─classes
│  │  └─java
│  │      ├─main
│  │      │  └─com
│  │      │      └─ssafy
│  │      │          └─tab
│  │      │              ├─config
│  │      │              ├─controller
│  │      │              ├─domain
│  │      │              ├─exception
│  │      │              ├─repository
│  │      │              └─service
│  │      └─test
│  │          └─com
│  │              └─ssafy
│  │                  └─tab
│  │                      └─service
│  ├─generated
│  │  └─sources
│  │      ├─annotationProcessor
│  │      │  └─java
│  │      │      ├─main
│  │      │      └─test
│  │      └─headers
│  │          └─java
│  │              ├─main
│  │              └─test
│  ├─reports
│  │  └─tests
│  │      └─test
│  │          ├─classes
│  │          ├─css
│  │          ├─js
│  │          └─packages
│  ├─resources
│  │  ├─main
│  │  └─test
│  ├─test-results
│  │  └─test
│  │      └─binary
│  └─tmp
│      ├─compileJava
│      │  └─compileTransaction
│      │      ├─backup-dir
│      │      └─stash-dir
│      ├─compileTestJava
│      │  └─compileTransaction
│      │      ├─backup-dir
│      │      └─stash-dir
│      └─test
├─gradle
│  └─wrapper
├─out
│  ├─production
│  │  ├─classes
│  │  │  └─com
│  │  │      └─ssafy
│  │  │          └─tab
│  │  │              ├─config
│  │  │              ├─controller
│  │  │              ├─domain
│  │  │              ├─dto
│  │  │              ├─exception
│  │  │              ├─repository
│  │  │              ├─service
│  │  │              └─utils
│  │  └─resources
│  └─test
│      ├─classes
│      │  └─generated_tests
│      └─resources
└─src
    ├─main
    │  ├─generated
    │  ├─java
    │  │  └─com
    │  │      └─ssafy
    │  │          └─tab
    │  │              ├─config
    │  │              ├─controller
    │  │              ├─domain
    │  │              ├─dto
    │  │              ├─exception
    │  │              ├─repository
    │  │              ├─service
    │  │              └─utils
    │  └─resources
    └─test
        ├─java
        │  └─com
        │      └─ssafy
        │          └─tab
        │              ├─repository
        │              └─service
        └─resources
```
