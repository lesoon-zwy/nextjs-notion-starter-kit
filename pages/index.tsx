import * as React from 'react';
import { NotionPage } from '@/components/NotionPage';
import { domain } from '@/lib/config';
import { resolveNotionPage } from '@/lib/resolve-notion-page';

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain);

    return { props, revalidate: 10 };
  } catch (err) {
    console.error('page error', domain, err);
    throw err;
  }
};

export default function NotionDomainPage(props) {
  // Function to manipulate the content to hide the specified elements
  const manipulateContent = (content) => {
    // Clone the content, applying the desired logic
    const modifiedContent = React.Children.map(content, (child) => {
      if (React.isValidElement(child) && child.props.className === 'notion-page-link') {
        // Hide <a> tags with class name 'notion-page-link'
        return null;
      }
      return child;
    });

    return modifiedContent;
  };

  return (
    <div>
      {/* Render NotionPage with manipulated content */}
      <NotionPage {...props}>{manipulateContent(props.children)}</NotionPage>
      {/* Other content that should always be displayed */}
    </div>
  );
}
