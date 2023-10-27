import * as React from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage(props) {
  return <NotionPage {...props}>
  {isIndexPage ? (
        // Conditionally hide elements with the "notion-page-link" class
        React.Children.map(props.children, (child) => {
          if (React.isValidElement(child) && child.props.className === 'notion-page-link') {
            return null; // Hide elements with the specified class
          }
          return child;
        })
      ) : null}
      </NotionPage>
}
