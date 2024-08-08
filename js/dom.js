let navbarItems = ["Home", "Product", "About", "Contact"]

let elHeader = document.querySelector(".site-header")
let elContainer = document.createElement("div") // container 
let elHeaderInner = document.createElement("div") // haeder 
let elLogoLink = document.createElement("a") // header__logo-link 
let elLogoImg = document.createElement("img") // header__logo-img

let elHeaderList = document.createElement("ul") // header__list 
let elLoginBtn = document.createElement("a") // header__login-btn


elContainer.classList.add("container")
elHeaderInner.classList.add("header")

elLogoLink.classList.add("header__logo-link")
elLogoLink.href = "/"

elLogoImg.classList.add("header___logo-img")
elLogoImg.src = "./images/logo-img.svg"
elLogoImg.width = "186"
elLogoImg.height= "58"
elLogoImg.alt = "Site Logo"

elHeaderList.classList.add("header__list")

elLoginBtn.classList.add("header__login-btn")
elLoginBtn.href = "/" 
elLoginBtn.textContent = "Login"

navbarItems.forEach(item => {
    let elHeaderItem = document.createElement("li")
    let elHeaderItemLink = document.createElement("a")

    elHeaderItem.classList.add("header___item") 
    elHeaderItemLink.classList.add("header__item-link")
    elHeaderItemLink.href="/" 
    elHeaderItemLink.textContent = item

    elHeaderList.appendChild(elHeaderItem) 
    elHeaderItem.appendChild(elHeaderItemLink)
})


elHeader.appendChild(elContainer)
elContainer.appendChild(elHeaderInner)
elHeaderInner.append(elLogoLink, elHeaderList, elLoginBtn)
elLogoLink.appendChild(elLogoImg)
// -------------------------------------------------------------------------------------


let elMain = document.createElement("main");
elMain.classList.add("site-main");

let elSection = document.createElement("section");
elSection.classList.add("hero-section");

let elHero = document.createElement("div");
elHero.classList.add("hero");

let elHeroTxtWrapper = document.createElement("div");
elHeroTxtWrapper.classList.add("hero__txt-wrapper");

let elHeroTitle = document.createElement("h1");
elHeroTitle.textContent = "Work at the speed of thought"
elHeroTitle.classList.add("hero__title")
let elHeroSubtitle = document.createElement("p");
elHeroSubtitle.textContent = "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
elHeroSubtitle.classList.add("hero__subtitle")

elHeroTxtWrapper.appendChild(elHeroTitle);
elHeroTxtWrapper.appendChild(elHeroSubtitle);

let elHeroBtnWrapper = document.createElement("div");
elHeroBtnWrapper.classList.add("hero__btn-wrapper");

let elTryBtn = document.createElement("button");
elTryBtn.textContent = "Try For Free";
elTryBtn.classList.add("try__btn")
let elLearnBtn = document.createElement("button");
elLearnBtn.textContent = "Learn More";
elLearnBtn.classList.add("learn__btn")

elHeroBtnWrapper.appendChild(elTryBtn);
elHeroBtnWrapper.appendChild(elLearnBtn);

let elHeroImgWrapper = document.createElement("div");
elHeroImgWrapper.classList.add("hero__img-wrapper");

let elMainImage = document.createElement("img");
elMainImage.src = "./images/screens.png"; 
elMainImage.alt = "Dashboard Image";

elHeroImgWrapper.appendChild(elMainImage);

elHero.appendChild(elHeroTxtWrapper);
elHero.appendChild(elHeroBtnWrapper);
elHero.appendChild(elHeroImgWrapper);

elSection.appendChild(elHero);
elMain.appendChild(elSection);

document.body.appendChild(elMain);

let mainElement = document.querySelector(".site-main");
console.log(mainElement);
