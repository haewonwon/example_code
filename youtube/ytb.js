// 1. 함수 작성 장점
// (1) 재사용성
// (2) 모듈화
// (3) 가독성
// (4) 유지 보수
// 2. 함수 작성 단점
// (1) 추가적인 추상화
// (2) 오버헤드 : 작은 기능을 위해 많은 함수를 만들면 함수 호출에 따른 성능 저하가 발생할 수 있음
// 3. 직접 작성 장점
// (1) 간단함
// (2) 성능 향상
// 4. 직접 작성 단점
// (1) 중복 코드
// (2) 유지 보수 어려움
// (3) 가독성 저하

// 내 코드 : 자식에서 부모 호출
// 올바른 코드 : 부모에서 자식 호출

/////////////////
// header 생성 //
////////////////
const mkHeader = () => {
    const tmpHeader = document.createElement("header")
    document.body.appendChild(tmpHeader)
}
/////////////////////////
// header 중 start 생성 //
////////////////////////
const mkStart = () => {
    const tmpStart = document.createElement("div")
    const header = document.querySelector("header")
    // getelementsbytagname 는 해당 태그 전체를 가져와 유사 배열로 반환 사용시, [0], [1] 을 붙여줘야 함
    header.appendChild(tmpStart)

    tmpStart.id = "start"
}
// header start 영역에 menu button 생성
const mkMenuBtn = () => {
    const tmpMenuBtn = document.createElement("button")
    document.getElementById("start").appendChild(tmpMenuBtn)

    tmpMenuBtn.id = "menu_btn"
}
// header start 영역 menu button 에 menu img 생성
const mkMenuImg = () => {
    const tmpMenuImg = document.createElement("img")
    document.getElementById("menu_btn").appendChild(tmpMenuImg)

    tmpMenuImg.className = "h-icon"
    tmpMenuImg.src = "www.youtube.com_ (6).png"
}
// header start 영역에 icon button 생성
const mkIconBtn = () => {
    const tmpIconBtn = document.createElement("button")
    document.getElementById("start").appendChild(tmpIconBtn)

    tmpIconBtn.id = "menu_icon"
}
// header start 영역 icon button 에 icon img 생성
const mkIconImg = () => {
    const tmpIconImg = document.createElement("img")
    document.getElementById("menu_icon").appendChild(tmpIconImg)

    tmpIconImg.id = "ytbicon"
    tmpIconImg.className = "h-icon"
    tmpIconImg.src = "www.youtube.com_ (7).png"
}
//////////////////////////
// header 중 center 생성 //
/////////////////////////
const mkCenter = () => {
    const tmpCenter = document.createElement("div")
    const header = document.querySelector("header")
    header.appendChild(tmpCenter)

    tmpCenter.id = "center"
}
// header center 영역에 search input 생성
const mkSearchInput = () => {
    const tmpSearchInput = document.createElement("input")
    document.getElementById("center").appendChild(tmpSearchInput)

    tmpSearchInput.id = "search"
    tmpSearchInput.type = "text"
    tmpSearchInput.placeholder = "검색"
}
// header center 영역에 search button 생성
const mkSearchBtn = () => {
    const tmpSearchBtn = document.createElement("button")
    document.getElementById("center").appendChild(tmpSearchBtn)

    tmpSearchBtn.id = "searchicon"
}
// header center 영역 search button 에 search img 생성
const mkSearchImg = () => {
    const tmpSearchImg = document.createElement("img")
    document.getElementById("searchicon").appendChild(tmpSearchImg)

    tmpSearchImg.className = "h-icon"
    tmpSearchImg.src = "www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (1).png"
}
// header center 영역에 mic button 생성
const mkMicBtn = () => {
    const tmpMicBtn = document.createElement("button")
    document.getElementById("center").appendChild(tmpMicBtn)

    tmpMicBtn.id = "mic_btn"
}
// header center 영역 mic button 에 mic img 생성
const mkMicImg = () => {
    const tmpMicImg = document.createElement("img")
    document.getElementById("mic_btn").appendChild(tmpMicImg)

    tmpMicImg.id = "micicon"
    tmpMicImg.className = "h-icon"
    tmpMicImg.src = "www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (2).png"
}
///////////////////////
// header 중 end 생성 //
//////////////////////
const mkEnd = () => {
    const tmpEnd = document.createElement("div")
    const header = document.querySelector("header")
    header.appendChild(tmpEnd)

    tmpEnd.id = "end"
}
// header end 영역에 making video button 생성
const mkMakingBtn = () => {
    const tmpMakingBtn = document.createElement("button")
    document.getElementById("end").appendChild(tmpMakingBtn)

    tmpMakingBtn.id = "mk_btn"
}
// header end 영역 making video button 에 making video img 생성
const mkMakingImg = () => {
    const tmpMakingImg = document.createElement("img")
    document.getElementById("mk_btn").appendChild(tmpMakingImg)

    tmpMakingImg.className = "h-icon"
    tmpMakingImg.src = "www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (3).png"
}
// header end 영역에 alarm button 생성
const mkAlarmBtn = () => {
    const tmpAlarmBtn = document.createElement("button")
    document.getElementById("end").appendChild(tmpAlarmBtn)

    tmpAlarmBtn.id = "alarm_btn"
}
// header end 영역 alarm button 에 alarm img 생성
const mkAlarmImg = () => {
    const tmpAlarmImg = document.createElement("img")
    document.getElementById("alarm_btn").appendChild(tmpAlarmImg)

    tmpAlarmImg.className = "h-icon"
    tmpAlarmImg.src = "www.youtube.com_channel_UCXteMTpHAvyDP05G0QULuZA (5).png"
}
// header end 영역에 profile button 생성
const mkProfileBtn = () => {
    const tmpProfileBtn = document.createElement("button")
    document.getElementById("end").appendChild(tmpProfileBtn)

    tmpProfileBtn.id = "pfofile_btn"
}
// header end 영역 profile button 에 profile img 생성
const mkProfileImg = () => {
    const tmpProfileImg = document.createElement("img")
    document.getElementById("pfofile_btn").appendChild(tmpProfileImg)

    tmpProfileImg.id = "pf-icon"
    tmpProfileImg.className = "h-icon"
    tmpProfileImg.src = "channels4_profile.jpg"
}

/////////////
// nav 생성 //
////////////
const mkNav = () => {
    const tmpNav = document.createElement("nav")
    document.body.appendChild(tmpNav)
}
//////////////////
// nav "홈" 생성 //
/////////////////
// nav 중 "홈" div 생성
function mkHomeDiv() {
    const tmpHomeDiv = document.createElement("div")
    const nav = document.querySelector("nav")
    nav.appendChild(tmpHomeDiv)

    tmpHomeDiv.id = "home_box"
    tmpHomeDiv.className = "navbtn"
}
// nav "홈" div 안에 button 생성
const mkHomeBtn = () => {
    const tmpHomeBtn = document.createElement("button")
    document.getElementById("home_box").appendChild(tmpHomeBtn)

    tmpHomeBtn.id = "home_btn"
}
// nav "홈" div 안 button 에 img 생성
const mkHomeImg = () => {
    const tmpHomeImg = document.createElement("img")
    document.getElementById("home_btn").appendChild(tmpHomeImg)

    tmpHomeImg.className = "n-icon"
    tmpHomeImg.src = "www.youtube.com_.png"
}
// nav "홈" div 안에 p 생성
const mkHomeText = () => {
    const tmpHomeText = document.createElement("p")
    document.getElementById("home_box").appendChild(tmpHomeText)

    tmpHomeText.innerHTML = "홈"
}
//////////////////////
// nav "Shorts" 생성 //
/////////////////////
// nav 중 "Shorts" div 생성
const mkShortsDiv = () => {
    const tmpShortsDiv = document.createElement("div")
    const nav = document.querySelector("nav")
    nav.appendChild(tmpShortsDiv)

    tmpShortsDiv.id = "shorts_box"
    tmpShortsDiv.className = "navbtn"
}
// nav "Shorts" div 안에 button 생성
const mkShortsBtn = () => {
    const tmpShortsBtn = document.createElement("button")
    document.getElementById("shorts_box").appendChild(tmpShortsBtn)

    tmpShortsBtn.id = "shorts_btn"
}
// nav "Shorts" div 안 button 에 img 생성
const mkShortsImg = () => {
    const tmpShortsImg = document.createElement("img")
    document.getElementById("shorts_btn").appendChild(tmpShortsImg)

    tmpShortsImg.className = "n-icon"
    tmpShortsImg.src = "www.youtube.com_ (1).png"
}
// nav "Shorts" div 안에 p 생성
const mkShortsText = () => {
    const tmpShortsText = document.createElement("p")
    document.getElementById("shorts_box").appendChild(tmpShortsText)

    tmpShortsText.innerHTML = "Shorts"
}
///////////////////
// nav "구독" 생성 //
//////////////////
// nav 중 "구독" div 생성
const mkSubDiv = () => {
    const tmpSubDiv = document.createElement("div")
    const nav = document.querySelector("nav")
    nav.appendChild(tmpSubDiv)

    tmpSubDiv.id = "sub_box"
    tmpSubDiv.className = "navbtn"
}
// nav "구독" div 안에 button 생성
const mkSubBtn = () => {
    const tmpSubBtn = document.createElement("button")
    document.getElementById("sub_box").appendChild(tmpSubBtn)

    tmpSubBtn.id = "sub_btn"
}
// nav "구독" div 안 button 에 img 생성
const mkSubImg = () => {
    const tmpSubImg = document.createElement("img")
    document.getElementById("sub_btn").appendChild(tmpSubImg)

    tmpSubImg.className = "n-icon"
    tmpSubImg.src = "www.youtube.com_ (4).png"
}
// nav "구독" div 안에 p 생성
const mkSubText = () => {
    const tmpSubText = document.createElement("p")
    document.getElementById("sub_box").appendChild(tmpSubText)

    tmpSubText.innerHTML = "구독"
}
////////////////////
// nav "보관함" 생성 //
////////////////////
// nav 중 "보관함" div 생성 
const mkArchiveDiv = () => {
    const tmpArchiveDiv = document.createElement("div")
    const nav = document.querySelector("nav")
    nav.appendChild(tmpArchiveDiv)

    tmpArchiveDiv.id = "archive_box"
    tmpArchiveDiv.className = "navbtn"
}
// nav "보관함" div 안에 button 생성
const mkArchiveBtn = () => {
    const tmpArchiveBtn = document.createElement("button")
    document.getElementById("archive_box").appendChild(tmpArchiveBtn)

    tmpArchiveBtn.id = "archive_btn"
}
// nav "보관함" div 안 button 에 img 생성
const mkArchiveImg = () => {
    const tmpArchiveImg = document.createElement("img")
    document.getElementById("archive_btn").appendChild(tmpArchiveImg)

    tmpArchiveImg.className = "n-icon"
    tmpArchiveImg.src = "www.youtube.com_(8).png"
}
// nav "보관함" div 안에 p 생성
const mkArchiveText = () => {
    const tmpArchiveText = document.createElement("p")
    document.getElementById("archive_box").appendChild(tmpArchiveText)

    tmpArchiveText.innerHTML = "보관함"
}
/////////////////////////////
// main 영역 (main 은 html) //
////////////////////////////
const mkVideoSection = () => {

    // section 생성
    const tmpSection = document.createElement("section")
    tmpSection.className = "video"
    // section 에 onclick event
    tmpSection.onclick = sectionClickEvent

    // section 안에 thumbnail 생성
    const tmpThumbnail = document.createElement("img")
    tmpThumbnail.id = "thumnail"
    tmpThumbnail.className = "pics"
    tmpThumbnail.src = "hqdefault.jpg"

    // section 안에 date div 생성
    const tmpDataDiv = document.createElement("div")
    tmpDataDiv.id = "data"
    tmpDataDiv.className = "data"

    // section 안 date div 안에 youtuber profile img 생성
    const tmpYtberProfileImg = document.createElement("img")
    tmpYtberProfileImg.id = "profile_img"
    tmpYtberProfileImg.className = "p-pic"
    tmpYtberProfileImg.src = "channels4_profile (2).jpg"

    // section 안 date div 안에 info div 생성
    const tmpInfoDiv = document.createElement("div")
    tmpInfoDiv.id = "info"
    tmpInfoDiv.className = "info"

    // section 안 date div 안 info div 안에 p (title) 생성
    const tmpTitleText = document.createElement("p")
    tmpTitleText.id = "titles"
    tmpTitleText.className = "titles"
    tmpTitleText.innerHTML = "실리카겔 (Silica Gel) - Realize (Unreleased) [LIVE From 2022 CDF]"

    // section 안 date div 안 info div 안에 p (youtuber) 생성
    const tmpYtberText = document.createElement("p")
    tmpYtberText.id = "youtubers"
    tmpYtberText.className = "youtubers"
    tmpYtberText.innerHTML = "Silica Gel 실리카겔"

    // section 안 date div 안 info div 안에 span (조회수) 생성
    const tmpViewText = document.createElement("span")
    tmpViewText.id = "views"
    tmpViewText.className = "views"
    tmpViewText.innerHTML = "6.2만회"

    // section 안 date div 안 info div 안에 span (날짜) 생성
    const tmpDateText = document.createElement("span")
    tmpDateText.id = "dates"
    tmpDateText.className = "dates"
    tmpDateText.innerHTML = "7개월 전"

    tmpSection.appendChild(tmpThumbnail)
    tmpSection.appendChild(tmpDataDiv)

    tmpDataDiv.appendChild(tmpYtberProfileImg)
    tmpDataDiv.appendChild(tmpInfoDiv)

    tmpInfoDiv.appendChild(tmpTitleText)
    tmpInfoDiv.appendChild(tmpYtberText)
    tmpInfoDiv.appendChild(tmpViewText)
    tmpInfoDiv.appendChild(tmpDateText)

    return tmpSection

}

const addSectionToMain = () => {
    const main = document.querySelector("main")

    for (index = 0; index < 16; index++) {
        const videoSection = mkVideoSection()
        main.appendChild(videoSection)
    }
}

const sectionClickEvent = (e) => {
    const id = e.target.id;

    switch (id) {
        case "thumnail":
        case "data":
        case "info":
        case "titles":
        case "views":
        case "dates":
            location.href = 'https://youtu.be/RkCsWzljWEM?si=_nqPyzM0nv2eyhXQ'
            break
        case "profile_img":
        case "youtubers":
            location.href = 'https://www.youtube.com/@SilicaGel'
            break
    }
}

/////////////////
// 함수 실행 영역 //
////////////////

// header
mkHeader()

mkStart()
mkMenuBtn()
mkMenuImg()
mkIconBtn()
mkIconImg()

mkCenter()
mkSearchInput()
mkSearchBtn()
mkSearchImg()
mkMicBtn()
mkMicImg()

mkEnd()
mkMakingBtn()
mkMakingImg()
mkAlarmBtn()
mkAlarmImg()
mkProfileBtn()
mkProfileImg()

// nav
mkNav()

mkHomeDiv()
mkHomeBtn()
mkHomeImg()
mkHomeText()

mkShortsDiv()
mkShortsBtn()
mkShortsImg()
mkShortsText()

mkSubDiv()
mkSubBtn()
mkSubImg()
mkSubText()

mkArchiveDiv()
mkArchiveBtn()
mkArchiveImg()
mkArchiveText()

// main
addSectionToMain()