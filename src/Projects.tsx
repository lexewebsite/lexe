import FocusArea from "./components/FocusArea";
import { LoremIpsum } from "lorem-ipsum";

import labquest from "./assets/focus-areas/labquest.jpeg";
import band from "./assets/focus-areas/band.jpeg";
import mgenesis from "./assets/focus-areas/music-genesis.jpeg";
import lynbrook from "./assets/focus-areas/lynbrook.jpeg";
import maclab from "./assets/focus-areas/maclab.jpeg";
import clab from "./assets/focus-areas/clab.jpeg";

// import "solid-slider/slider.css";
// import { Slider, createSlider } from "solid-slider";

import {
  technologyParagraphs_FA,
  stemParagraphs_FA,
  ah_FA,
  cwi_FA,
} from "./helpers";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});
function Projects() {
  return (
    <div class="container w-full text-center py-12">
      <h1 class="text-5xl font-extrabold text-center mb-10">Focus Areas</h1>
      <div class="w-[90%] ml-[5%] flex-col flex gap-8">
        <FocusArea
          name={"STEM"}
          description={technologyParagraphs_FA}
          imageSrcs={[labquest]}
          altTexts={[
            "An image of a stack of calculators purchased with a grant from Lynbrook Excellence in Education Foundation.",
          ]}
          captions={[null]}
        />
        <FocusArea
          name={"Arts & Humanities"}
          description={ah_FA}
          imageSrcs={[band, mgenesis]}
          altTexts={[
            "A photograph of Lynbrook students playing in a band with instruments.",
            "A photograph of Lynbrook Students using some musical application on computer desktops.",
          ]}
          captions={["Harps", "Music Genesis Class"]}
        />
        <FocusArea
          name={"Technology"}
          description={technologyParagraphs_FA}
          imageSrcs={[maclab, clab]}
          altTexts={[
            "A photograph of Lynbrook students using Photoshop on computers.",
            "A photograph of Lynbrook Students typing on computers.",
          ]}
          captions={["Mac Lab", "Computer Lab"]}
        />
        <FocusArea
          name={"Campus Wide Infrastructure"}
          description={cwi_FA}
          imageSrcs={[lynbrook]}
          altTexts={["An aerial photograph of the entire Lynbrook High School"]}
          captions={[null]}
        />
      </div>
    </div>
  );
}

export default Projects;
