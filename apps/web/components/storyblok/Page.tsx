import { storyblokEditable, StoryblokComponent, SbBlokData } from "@storyblok/react";

interface PageProps {
  blok: SbBlokData
}


const Page = ({ blok }) => (
  <>
    {blok.body
      ? blok.body.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </>
);

export default Page;
