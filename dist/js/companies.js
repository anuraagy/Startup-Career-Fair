companies = [
  { logo: "acculynx", url: "https://acculynx.com" },
  { logo: "adranos", url: "https://www.adranos.com/" },
  { logo: "conversight", url: "https://conversight.ai" },
  { logo: "cook", url: "https://www.cookbiotech.com/" },
  { logo: "delmar", url: "https://www.delmarsd.com/#!/" },
  { logo: "forager", url: "https://www.foragerscs.com" },
  { logo: "healthcall", url: "https://www.healthcall.com" },
  { logo: "indigo", url: "https://www.indigobio.com" },
  { logo: "journera", url: "https://journera.com/" },
  { logo: "laegacy", url: "https://https://laegacy.com/" },
  { logo: "nextrow", url: "https://nextrow.com" },
  { logo: "planeenglish", url: "https://PlaneEnglishSIM.com" },
  { logo: "pq", url: "http://pqtalent.com" },
  { logo: "monument_logo", url: "https://getmonument.com/" },
  { logo: "sarsonfunds", url: "https://www.sarsonfunds.com" }, 
  { logo: "skillzilla", url: "www.skillzilla.io" },
  { logo: "swift", url: "https://www.swiftfuels.com" },
  { logo: "thiemewagner", url: "https://www.thiemeandwagner.com" },
  { logo: "rogo", url: "https://rogoag.com" },
]



const companiesContainer = document.getElementById("companies-attending");

companies.forEach(company => {
  let companyLogo = document.createElement("img");

  companyLogo.src = `img/${company.logo}.png`;
  companyLogo.className = "logo-image";

  companiesContainer.append(companyLogo);

  companyLogo.addEventListener("click", (e) => {
    window.location = company.url;
  })
})