import LayoutCSS from "../../helpers/layout/layout.module.css";
import style from "./CenterText.module.css";
import "./CenterText.module.css"

export default function CenterText({ paragraphs }) {

   // we start -n and end with n- for all tags
    // -li for list
    // -lb for list bullet
    // -p for smaller spacing
    // -n for larger spacing
    // -bl for bold
    // -l for italic
    // -u underline
    // -h1 larger text size
    // -h2 larger text size
    // -h3 larger text size

    // -a for link if possible
    // www.google.com here is a google link 
    // first text will be always link so will we split with space ' ' anf get the 0th element from list and make it as href 
  if (typeof (paragraphs) == "string") {

    const newStr = paragraphs.split("-n").join("<br></br>");

    const newN1Str = newStr.split("-p1").join(`<p class=${style.pN1}></p>`);

    const newN2Str = newN1Str.split("-p2").join(`<p class=${style.pN2}></p>`);

    const newN3Str = newN2Str.split("-p3").join(`<p class=${style.pN3}></p>`);

    const boldStr = newN3Str.split("-bl").join(`<span class=${style.textBold}> `)

    const closeBoldStr = boldStr.split("bl-").join("</span>")

    const newLineStr = closeBoldStr.split("-p").join(`<p class=${style.pTagStyle}>`)
    const closeNewLineStr = newLineStr.split("P-").join(`</p>`)

    const newListStr = closeNewLineStr.split("-li").join(`<p class=${style.listItem}> `)
    const closeNewListStr = newListStr.split("li-").join(`</p>`)


    const newListBulletStr = closeNewListStr.split("-lb").join(`<p class=${style.listItem}> ● `)
    const closeListBulletStr = newListBulletStr.split("lb-").join(`</p>`)

    const newH1Str = closeListBulletStr.split("-h1").join(`<h1 class=${style.pH1}>`)
    const closeH1Str = newH1Str.split("h1-").join(`</h1>`)

    const newH2Str = closeH1Str.split("-h2").join(`<h1 class=${style.pH2}>`)
    const closeH2Str = newH2Str.split("h2-").join(`</h1>`)

    const newH3Str = closeH2Str.split("-h3").join(`<h3 class=${style.pH3}>`)
    const closeH3Str = newH3Str.split("h3-").join(`</h3>`)
    
    const newUnderlineStr = closeH3Str.split("-u").join(`<p class=${style.pUnderline}>`)
    const closeUnderlineStr= newUnderlineStr.split("u-").join(`</p>`)

    const newItalicStr = closeUnderlineStr.split("-l").join(`<p class=${style.pItalic}>`)
    const closeItalicStr = newItalicStr.split("l-").join(`</p>`)
    return (
      <>
        <div
          className={LayoutCSS.RootDiv + " " + style.smallTextData}
          dangerouslySetInnerHTML={{ __html: closeItalicStr }}
        ></div>
      </>
    );
  }
  else{
    return (
      <>
        <div
          className={LayoutCSS.RootDiv + " " + style.smallTextData}
          
        > Please Pass Data In String...!</div>
      </>
    );
  }
}
