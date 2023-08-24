# 슈퍼코딩 2주차 프로젝트

## 배포 사이트

[배포 사이트](https://itproject.shop/)

## 요구사항


## tech stack
<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white">
<img src="https://img.shields.io/badge/AWS Cloud Front-F38020?style=for-the-badge&logo=AWS Cloud Front&logoColor=white">
<img src="https://img.shields.io/badge/Github Actions-2088FF?style=for-the-badge&logo=Github Actions&logoColor=white">
<br>


### 로그인 페이지/로그아웃 기능

- 필수
  - 이메일, 비밀번호 기반의 로그인 기능을 구현
  - 이메일, 비밀번호에 유효성 검사 로직을 적용
  - 로그아웃 기능을 구현
  - axios intercepter
- 선택
  - Oauth 기반 인증 기능을 추가(네이버, 카카오등)✔
  - 로그인 시도를 5회 실패하면 계정을 일정 시간 잠금✔
- 챌린지
  - 이미지 편집
  - 아이디/비밀번호 찾기✔
  - 메일 인증(리다이렉트)
  - 리덕스 퍼시스트(accesstoken 관리), localStorage

### 회원가입

- 필수
  - 이메일, 비밀번호, 전화번호, 주소, 프로필 사진을 입력받는다.
  - 각각의 input에 규격에 맞는 값이 들어가도록 유효성 검사 로직을 추가한다.
- 선택
  - 이메일 중복확인 기능을 추가
  - 전화번호 기반 본인 인증 기능을 추가
- 챌린지
  - 휴대폰 번호 인증

### 쇼핑몰 물품 리스트 페이지

- 필수
  - 이미지와 상품명, 옵션, 가격 등의 정보를 그리드 형태로 리스트로 나타낸다.
  - 옵션에 따른 필터 및 페이지네이션 기능을 구현한다
- 선택
  - 반응형 레이아웃을 구현
  - 무한 스크롤링 기능을 구현
  - 상품 검색 기능을 구현(프론트 단에서 리스트 필터? 단어 적고 검색 버튼?)
- 챌린지
  - 이미지 최적화
  - 레이지로딩
  - 캐러셀(스와이퍼)

### 상세 페이지

- 필수
  - 이미지와 상품명, 옵션, 가격 등의 정보를 나타낸다.
  - 장바구니에 수량, 옵션을 설정해서 담을 수 있는 버튼을 구현한다.
  - max 수량 over되지 않게
- 선택
  - 여러 장의 이미지를 캐러셀로 보여줄 수 있는 화면을 구현한다.
  - 옵션에 따른 맞춤형 이미지를 보여주는 기능을 구현한다.
- 챌린지
  - 돋보기 기능
  - 리뷰✔
  - 추천 아이템
  - 최근 본 아이템
  - 비교하는 모달(아이템들)
  - 옵션 필터(추후 내용 논의)
  - 페이지네이션(댓글)

### 물품 주문 페이지

- 필수
  - 장바구니에 담긴 물품 내역을 보여준다.
  - 장바구니에 담긴 물품 내역을 수정할 수 있으며 그에 따라 가격이 달라진다.
  - 결제에 필요한 정보를 입력해서 주문 기능을 구현한다.
- 선택
  - 재고가 없거나 재고보다 많은 수량을 주문하려는 경우 막는다.
- 챌린지
  - 이미지 미리보기
  - 이미지 편집
  - 이미지 최적화
  - 결제✔
  - 임시저장(폼 양식)

### 유저 프로필(마이)페이지

- 필수
  - 유저 정보를 보여준다.
  - 유저가 장바구니에 담은 물품 리스트를 보여준다.
- 선택
  - 유저가 판매하는 물품 리스트를 보여준다.
  - 유저 정보를 수정할 수 있다.
  - 유저가 쇼핑몰 페이머니를 조회할 수 있다.
  - 유저가 쇼핑몰 페이머니를 충전할 수 있다.
  - 등록 및 판매 기능
- 챌린지
  - 어드민
  - 금액 충전✔
  - 개인 정보 수정✔
  - 프로필 이미지 편집✔

### 물품 등록

- 필수
  - 판매할 물품을 등록 할 수 있게 한다.

### 물품 판매

- 필수
  - 판매중인 물품의 재고를 수정할 수 있다.
- 선택
  - 판매한 물품 내역을 조회할 수 있다.

### 프로젝트 전체

- 필수
  - React, js 이용
  - redux, context api를 통해 전역 상태 관리
  - 커스텀 훅을 통해서 공통으로 사용하는 로직 관리
- 선택
  - styled-component, tailwindcss
  - ts, next.js

### 컨벤션

#### 폴더, 파일 컨벤션

- 도메인(기능) 별로 폴더 생성
- 폴더는 무조건 소문자로 작성
- 컴포넌트는 무조건 PascalCase
- style-components의 파일 명은 {도메인}.style.js
  - as S로 import

#### 코드, 변수 컨벤션

- 주석은 /\*\* \*/ 사용(마우스 커서만 대도 알 수 있게)
- .env, api, key는 무조건 대문자로만
- 함수명은 camelCase
- 컴포넌트, 생성자 함수, Class는 PascalCase

#### 커밋 컨벤션

- 상세하게 기능별로 커밋(코드리뷰를 위해)
- pull request시에는 팀원들과 이야기
- 기능 추가 feat #이슈번호 :
- 스타일 style #이슈번호 :
- 수정 fix #이슈번호 :
- 삭제 delete #이슈번호 :
- 문서관련 docs #이슈번호 :
- 테스트 test #이슈번호 :

#### 네이밍 컨벤션

- 1개의 요소를 감싸는 컴포넌트는 `Wrapper`로 끝나게 짓기
- 여러개 요소를 감싸는 컴포넌튼 `Container`로 끝나게 짓기
- 최상위 레이아웃 설정 컴포넌트는 `Layout`으로 끝나게 짓기
- `div` 태그 컴포넌트 이름은 자유롭게 하나 `Box`로 짓기
- `ul` 태그 컴포넌트는 `List`로 끝나게끔 짓기
- `li` 태그 컴포넌트는 `Item`으로 끝나게끔 짓기
- 반복되는 컴포넌트는 `Item`으로 끝나게끔 짓기
- 모든 컴포넌트의 이름에는 기능을 암시하는 단어를 집어넣기
- styled-components

#### git branch 전략

- Github Flow

### 기술 챌린지

- Github Actions CI/CD
  - 테스트를 위한 불필요한 반복적 작업을 줄이기 위함과 동시에 개발 속도 향상을 위해 사용.
  - Github Actions는 github에서 제공하고, 쉽게 CI/CD를 구축할 수 있는 장점이 있으며 YAML이란 포맷을 사용해 가독성이 높고, 정보가 많아 사용.
- CloudFront 배포
  - CloudFront는 엣지 로케이션을 통해 콘텐츠를 제공하므로 사용자에게 빠른 속도의 네트워크를 전송하기 위해 CDN 서비스인 CloudFront 사용.
  - 보안을 위한 http 배포가 아닌 https 배포를 위해 사용.
