import {useState} from "react";
import {StoryblokComponent, storyblokEditable} from "@storyblok/react";
import styles from './Accordion.module.sass'

export const Accordion = ({blok}) => {
  const [expanded, setExpaned] = useState(false)

  return (
    <div {...storyblokEditable(blok)} className={styles.container}>
      <div>
        <div className={'cursor-pointer noselect'} onClick={() => setExpaned(!expanded)}>
          <h2>{blok.title}</h2>
        </div>
        <div className={`${styles.container__content} ${expanded && styles.container__content__expanded}`}>
          {blok.content
            ? blok.content.map((blok) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))
            : null}
        </div>
      </div>
    </div>
  )
}
