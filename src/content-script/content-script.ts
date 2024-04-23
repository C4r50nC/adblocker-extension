const rules: {
  [url: string]: () => void;
} = {
  "https://www.nytimes.com/section/technology": filterNYTTechnologyByClass,
};

function filterNYTTechnology() {
  const siteContent = document.getElementById("site-content");
  const topWrapper = document.getElementById("top-wrapper");
  siteContent.removeChild(topWrapper);
}

function filterNYTTechnologyByClass() {
  const divs = document.getElementsByTagName("div");
  for (const div of divs) {
    if (div.className.indexOf("ad ") !== -1) {
      div.style.display = "none";
    }
  }
}

if (document.URL in rules) {
  console.log(document.URL);
  rules[document.URL]();
}
