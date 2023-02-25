import {StoryblokComponent, storyblokEditable} from "@storyblok/react";

export const Statement = ({blok}) => {
  return (
    <div {...storyblokEditable(blok)} className={'home--content'}>
      <div className={'home--content__slogan'}>
        {blok.lines
          ? blok.lines.map((blok) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))
          : null}
      </div>
    </div>
    )
}

