import {storyblokEditable} from "@storyblok/react";

export const Line = ({blok}) => {
  return (
    <p {...storyblokEditable(blok)} className={'slogan'}>{blok.text}</p>
  )
}
