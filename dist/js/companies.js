companies = [
  { logo: "asimpleart", url: "https://asimpleart.com" },
  { logo: "avionos", url: "http://www.avionos.com" },
  { logo: "bloomerang", url: "https://bloomerang.co/" },
  { logo: "canceriq", url: "https://www.canceriq.com" },
  { logo: "cooler", url: "https://www.coolerscreens.com" },
  { logo: "crafty", url: "https://craftydelivers.com" },
  { logo: "demandjump", url: "https://demandjump.com" },
  { logo: "doublemap", url: "https://www.doublemap.com" },
  { logo: "fillintime", url: "https://fillintimellc.wixsite.com/fill-in-time" },
  { logo: "freeosk", url: "https://www.thefreeosk.com/" },
  { logo: "givelify", url: "https://www.givelify.com" },
  { logo: "halo", url: "https://haloinvesting.com"},
  { logo: "highalpha", url: "https://highalpha.com"},
  { logo: "ifi", url: "https://opp.purdue.edu/programs/Interns_for_Indiana.html" },
  { logo: "inari", url: "http://inari.com/" },
  { logo: "iter8", url: "http://iter8.launchrock.com/" },
  { logo: "look", url: "https://look.education" },
  { logo: "monumentlabs", url: "https://getmonument.com/" },
  { logo: "onecause", url: "https://www.onecause.com" },
  { logo: "panopta", url: "https://www.panopta.com/" }, 
  { logo: "passageways", url: "https://www.passageways.com/" },
  { logo: "planeenglish", url: "https://planeenglish.net/" },
  { logo: "playlister", url: "https://WWW.PLAYLISTER.APP" },
  { logo: "rogo", url: "https://rogoag.com" },
  { logo: "silverline", url: "https://silverline.group"},
  { logo: "springbuk", url: "https://springbuk.com" },
  { logo: "teacherly", url: "https://teacher.ly/" },
  { logo: "thickstat", url: "https://www.thickstat.com" },
  { logo: "zWorks", url: "https://www.zworks.org/" },
  { logo: "zylo", url: "https://zylo.com/" }
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