import * as React from "react";
import {DownloadIcon, HireText} from "./icon";

const HireMe = () => {
     return (
          <div className='fixed left-4 bottom-4
                    		flex items-center justify-center oerflow-hidden'>
               <div className="w-48 h-auto flex items-center justify-center relative">

                    <DownloadIcon className={"fill-dark animate-spin mr-20 "}/>

               </div>
          </div>
     )

}

export default HireMe;
