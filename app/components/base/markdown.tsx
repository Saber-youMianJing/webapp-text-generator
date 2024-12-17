/* eslint-disable */
import ReactMarkdown from 'react-markdown'
import 'katex/dist/katex.min.css'
import RemarkMath from 'remark-math'
import RemarkBreaks from 'remark-breaks'
import RehypeKatex from 'rehype-katex'
import RemarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierHeathLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export function Markdown(props: { content: string, onLinkClick: (href: string) => void }) {
  const handleLinkClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof HTMLAnchorElement) {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      if (href) {
        props.onLinkClick(href);
      }
    }
  };
  return (
    <div className="markdown-body" onClick={handleLinkClick}>
      <ReactMarkdown
        remarkPlugins={[RemarkMath, RemarkGfm, RemarkBreaks]}
        rehypePlugins={[
          RehypeKatex,
        ]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return (!inline && match)
              ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  style={atelierHeathLight}
                  language={match[1]}
                  showLineNumbers
                  PreTag="div"
                />
              )
              : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
          },
        }}
        linkTarget={'_blank'}
      >
        {props.content}
      </ReactMarkdown>
      <a href='https://brand.boehringer-ingelheim.com/document/46#/brand-elements/color/primary-colors'>boehringer-ingelheim</a>
    </div>
  )
}
