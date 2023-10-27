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

//export default function NotionDomainPage(props) {
//  return <NotionPage {...props} />
//}

export default function NotionDomainPage(props) {
  // You can add your own custom content here
  return (
    <div>
      <h1>Your Custom Page</h1>
      <p>This is your custom content.</p>
      <NotionPage {...props} />
      {/* You can add more custom components or content here */}
    </div>
  );
}