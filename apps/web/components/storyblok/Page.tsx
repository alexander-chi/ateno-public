import { storyblokEditable, StoryblokComponent, SbBlokData } from "@storyblok/react";

interface PageProps {
  blok: SbBlokData
}


const Page = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    {blok.body
      ? blok.body.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </div>
);

export default Page;
