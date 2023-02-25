import {useState} from "react";

export const IFrame = ({blok}) =>  {
  const [height, setHeight] = useState(400)


  return (
    <iframe
      src={blok.source}
      className={''}
      style={{height: `${height}px`}}
      onLoad={e => {
        console.log('Loaded', e.currentTarget.contentWindow.document.body.scrollHeight)
        setHeight(e.currentTarget.contentWindow.document.body.scrollHeight)
      }}
    />
  )
}
