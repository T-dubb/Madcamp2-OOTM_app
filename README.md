# OOTM App
사람들의 코디를 공유하고 공감하면서 패션을 발전시킬 수 있는 앱을 만들어보고자 했다.
OOTM은 Outfit of Tomorrow로 "내일 어떤 옷을 입지?"라는 고민을 줄여주는 앱이라는 뜻이다.

> 개발자: 김태우, 이호준
>
> Skill : Java / Node.js(Express), MongoDB

---

## 기능 소개
### Tab

+ ViewPager2를 이용한 Tab Layer 구조로 이루어져있다.
+ Main, Bookmark, Mypage로 총 3개의 탭으로 구성되어 있다.

### Login, Logout, Sign up

<p float=left>
<img src="https://user-images.githubusercontent.com/64680507/129441038-516777b2-8a1a-4c4c-878c-41b32a568688.jpg" height="250">
<img src="https://user-images.githubusercontent.com/64680507/129441058-515004a3-143e-4ec0-8d40-1506e7e56a38.jpg" height="250">
</p>

+ 로그인, 로그아웃, 회원가입을 할 수 있다.


### Main

<p float=left>
  <img src="https://user-images.githubusercontent.com/64680507/129441152-5c36a30c-5a5f-4d7a-a908-0be8425905e3.jpg" height="250">
  <img src="https://user-images.githubusercontent.com/64680507/129441546-501d871a-1fd2-408a-83b8-bb71ab891fa1.gif" height="250">
</p>

+ 모든 유저들의 코디 게시물이 보여지는 공간이다.
+ New와 Hot 버튼으로 게시물들을 최신순, 인기순으로 정렬해서 확인할 수 있다.
  - Main Tab의 Hot, New 정렬 전환은 게시물들의 배열을 재정렬하는 방식으로 구현했다.
  - Hot의 기준은 좋아요+북마크 수로 내림차순으로 정렬했다.
+ 우측 하단의 플로팅 버튼으로 코디 게시물 추가 화면으로 이동이 가능하다.
+ 코디 게시물 썸네일에서 게시물을 태그한 유저의 수를 확인할 수 있다.

  #### New Post

  <img src="https://user-images.githubusercontent.com/64680507/129441639-e4669e7c-3974-43c9-928b-a8a2e0b4173a.jpg" height="250">

  + 상단 옷걸이 아이콘을 누르면 사진을 추가할 수 있다.
  + 아우터, 상의, 하의, 악세서리, 신발 정보를 텍스트로 입력할 수 있다.
  + 하단 체크박스를 선택해서 코디 장르를 선택할 수 있다.
  + 우측 상단 완료 버튼을 누르면 게시물 등록이 완료된다.

  #### Post
  <p float=left>
    <img src="https://user-images.githubusercontent.com/64680507/129441828-fd5707f1-eaeb-4719-ab22-7f56143f45b9.jpg" height="250">
    <img src="https://user-images.githubusercontent.com/64680507/129441980-d61b54d1-c932-45a5-b60c-35986bcc3291.jpg" height="250">
  </p>
  
  + 게시물 썸네일을 터치하면 게시물 화면으로 이동한다.
  + 작성자의 프로필, 닉네임, 키-몸무게, 포스트한 코디 사진, 코디의 장르, 작성 날짜 등이 표시된다.
  + 좋아요, 게시물 저장, 북마크, 삭제 등의 버튼이 있다.
  + 좋아요와 북마크 버튼은 토글 버튼이고, 북마크 버튼을 누르면 두 번째 탭인 북마크 탭에 북마크한 게시물이 한번에 보여진다.
  + 삭제 버튼은 작성자만 누를 수 있다.
  + 하단 '착용 제품 확인하기'를 클릭하면 작성자가 착용한 제품들을 확인할 수 있다.

### Bookmark

<p float=left>
  <img src="https://user-images.githubusercontent.com/64680507/129442229-db47b9ec-081f-4879-a3eb-a029cc3d6813.jpg" height="250">
  <img src="https://user-images.githubusercontent.com/64680507/129442249-004d3011-65b7-4f12-a2c2-6e5b062824cc.gif" height="250">
</p>

+ 북마크 탭에서는 자신이 북마크 버튼을 눌렀던 게시물들을 모아서 볼 수 있다.
+ 상단에 총 몇 개의 게시물을 북마크 했는지 개수가 작게 표시된다.

### MyPage

<p float=left>
  <img src="https://user-images.githubusercontent.com/64680507/129442368-0ede719b-bead-47a8-a860-70873585afb8.jpg" height="250">
  <img src="https://user-images.githubusercontent.com/64680507/129442373-fa2bce13-b7a3-43ee-8d43-7269931a7546.jpg" height="250">
</p>

+ 마이페이지에서는 유저의 프로필, 이름, 성별이 표시된다.
+ 상세정보 버튼을 누르면 이름, 나이, 성별, 생년월일을 볼 수 있다.
+ 우측 상단에는 로그아웃, 회원탈퇴 버튼이 존재한다.
+ 아래쪽에서 자신이 작성했던 코디 게시물들을 모아서 볼 수 있다.

---

## Implementation

### DB

> 사용한 Schema는 users와 post로 두 개이다. 
> User Schema는 회원 별로 고유한 정보들을 담고 있고, 정보를 표시하거나 유저를 구별할 때 사용되었다.
> Post Schema는 사진, 표시할 유저 정보, 날짜 등의 게시물 정보와 게시물을 좋아요, 북마크한 유저들을 모은 배열 두 개로 구성되어 있다.

#### User Schema
+ 구성: userID, userName, userProfile, postArray
+ 
+ 로그인, 로그아웃, 회원가입, 회원탈퇴
  - Kakao SDK를 사용했다.
  - 회원가입을 하면 DB에 저장하고, 회원탈퇴를 하면 DB에서 삭제한다.
  - 로그인할 때, userID, userName, userProfile를 갱신한다.
+ postArray에는 user가 작성한 Post의 ID를 저장한다.


#### Post Schema
+ 구성: userName, userID, userProfile, userBody, wishUsers, markUsers, clothInfo, postGenre, date, postImage 등
+ 게시물 작성
  - 게시물 작성 화면에서 포스트를 완료하면, userName, ID, Profile, Body 등의 정보를 저장한다.
+ wishUsers, markUsers
  - 다른 유저가 게시물을 좋아요 혹은 북마크를 하면 wishUsers, markUsers 배열에 해당 유저의 userID를 추가한다.
  - 이 배열을 통해 유저마다 다르게 좋아요, 북마크 여부를 표시하고, 게시물 썸네일에 북마크 수를 표시하거나, 북마크 탭에 자신이 북마크한 게시물들을 표시할 수 있다.


## Contacts
Contributors
- 김태우, rlaxodntttt@kaist.ac.kr
- 이호준, ehojune@gmail.com


