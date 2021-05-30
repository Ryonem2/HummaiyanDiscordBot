const puppeteer = require("puppeteer");

const vgmUrl = "https://secretpat3.wixsite.com/teammorchor?fbclid=IwAR11KDzLkxiSZHN2c6JUR0owih_bhNbopbnWIfNEjGTDqoUf6AOW4yKaLrM";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(vgmUrl);

  const results = await page.evaluate(() => {
    //our new selector\
    let arr = [];
    // return document.querySelectorAll(".head-one").innerText;
    const len = document.get('span');
       for(let i=0;i<len.length;i++){
           arr.push(len[i].innerHTML);
       }
    // const x = arr.join("/n");
    return arr;
  });

  //     result.forEach(link => console.log(link));
  console.log(results);

  await browser.close();
})();
