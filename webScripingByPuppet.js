const puppeteer = require("puppeteer");

const vgmUrl = "https://www.youtube.com/watch?v=OVyJUrvtd0M";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(vgmUrl);

  const results = await page.evaluate(() => {
    //our new selector\
    let arr = [];
    const sectionElems = Array.from(document.querySelectorAll('#info-contents'));
    // return sectionElems;
    sectionElems.forEach((sectionElems) => {
      const len = sectionElems.querySelector("h1:not(.title):not(.style-scope):not(.ytd-video-primary-info-renderer)").innerHTML;
      return len;
    });
    // return document.querySelectorAll(".head-one").innerText;
    
      //  for(let i=0;i<len.length;i++){
      //      arr.push(len[i].innerHTML);
      //  }
    // const x = arr.join("/n");
  });

  //     result.forEach(link => console.log(link));
  console.log(results);

  await browser.close();
})();
