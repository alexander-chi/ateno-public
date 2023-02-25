import ReactMarkdown from 'react-markdown'
import {storyblokEditable} from "@storyblok/react";
import remarkGfm from 'remark-gfm'

export const Markdown = ({blok}) => {
  return (
    <div className={''} {...storyblokEditable(blok)}>
      <ReactMarkdown children={blok.content} remarkPlugins={[remarkGfm]}  components={{
        p({node, children, ...props}) {
          return <p {...props}>{children}</p>
        },
        h1({node, children, ...props}) {
          return <h1 {...props}>{children}</h1>
        },
        img({node, children, ...props}) {
          return <img className={'w-100'} {...props}/>
        }
      }} />
    </div>
  )
}
