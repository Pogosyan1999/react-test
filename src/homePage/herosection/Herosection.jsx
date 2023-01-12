import React from "react";
import Man from "./men/Man";
import Title from "./title/Title";
import Text from "./text/Text";
import Herobutton from "./button/Herobutton";

const Herosection = () => {
  return (
    <section className="heroSection container">
      <div className="heroSection_minContainer">
        <Title />
        <Man />
      </div>
      <div className="heroSection_footerContainer">
        <Text/>
        <Herobutton/>
      </div>
    </section>
  );
};

export default Herosection;
