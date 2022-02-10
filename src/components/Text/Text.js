import LayoutCSS from "../../helpers/layout/layout.module.css";
import style from "./Text.module.css";


export default function Text({ paragraphs }) {
    return (
                <div className={LayoutCSS.RootDiv + " " + style.text} >
                    {
                        paragraphs.map((paras, index) => {
                            return (
                                <>
                                    <p className={style.para} >{paras.para}</p>
                                </>
                            )
                        })

                    }
                </div>
    );
}
