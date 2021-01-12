import React from "react";
import Sidebar from "../../static/Sidebar";

const Popular = () => {
   return (
      <React.Fragment>
         <Sidebar />
         <div className="render-popular">
            <h1> Popular</h1>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur autem repellat
               placeat reiciendis asperiores dolore excepturi velit, inventore rem molestias illum
               dolorum dolorem voluptatum ullam fugiat saepe pariatur architecto reprehenderit!
            </p>
         </div>
      </React.Fragment>
   );
};

export default Popular;
