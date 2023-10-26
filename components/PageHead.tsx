import * as React from 'react'
import Head from 'next/head'

import * as config from '@/lib/config'
import * as types from '@/lib/types'
import { getSocialImageUrl } from '@/lib/get-social-image-url'

export const PageHead: React.FC<
  types.PageProps & {
    title?: string
    description?: string
    image?: string
    url?: string
  }
> = ({ site, title, description, pageId, image, url }) => {
  const rssFeedUrl = `${config.host}/feed`

  title = title ?? site?.name
  description = description ?? site?.description

  const socialImageUrl = getSocialImageUrl(pageId) || image

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fefffe" key="theme-color-light" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2d3439" key="theme-color-dark" />

      <meta name='robots' content='index,follow' />
      <meta property='og:type' content='website' />

      {site && (
        <>
          <meta property='og:site_name' content={site.name} />
          <meta property='twitter:domain' content={site.domain} />
        </>
      )}

      {config.twitter && (
        <meta name='twitter:creator' content={`@${config.twitter}`} />
      )}

      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='twitter:description' content={description} />
        </>
      )}

      {socialImageUrl ? (
        <>
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={socialImageUrl} />
          <meta property='og:image' content={socialImageUrl} />
        </>
      ) : (
        <meta name='twitter:card' content='summary' />
      )}

      {url && (
        <>
          <link rel='canonical' href={url} />
          <meta property='og:url' content={url} />
          <meta property='twitter:url' content={url} />
        </>
      )}

      <link
        rel='alternate'
        type='application/rss+xml'
        href={rssFeedUrl}
        title={site?.name}
      />

      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <title>{title}</title>
      <style id="__jsx-2177199530">
        html.theme-light{
        --gray - h:36;--gray-s:2%;
        --gray-l:46%;
        --color-gray:hsl(var(--gray-h), var(--gray-s), var(--gray-l));
        --color-text-gray:var(--color-gray);
        --color-bg-gray:hsl(var(--gray-h),var(--gray-s),90%);
        --color-bg-gray-light:var(--color-bg-gray);
        --color-pill-gray:hsl(calc(var(--gray-h) + 14),var(--gray-s),88%);
        --color-pill-text-gray:hsl(var(--gray-h),var(--gray-s),calc(var(--gray-l) - 28%));
        --brown-h:19;--brown-s:31%;--brown-l:47%;
        --color-brown:hsl(var(--brown-h), var(--brown-s), var(--brown-l));
        --color-text-brown:var(--color-brown);--color-bg-brown:hsl(var(--brown-h),var(--brown-s),
        90%
        );--color-bg-brown-light:var(--color-bg-brown);--color-pill-brown:hsl(
        var(--brown-h),
        calc(var(--brown-s) + 10%),
        89%
        );--color-pill-text-brown:hsl(
        var(--brown-h),
        calc(var(--brown-s) + 10%),
        calc(var(--brown-l) - 28%)
        );--orange-h:30;--orange-s:87%;--orange-l:45%;--color-orange:hsl(
        var(--orange-h),
        var(--orange-s),
        var(--orange-l)
        );--color-text-orange:var(--color-orange);--color-bg-orange:hsl(
        var(--orange-h),
        var(--orange-s),
        90%
        );--color-bg-orange-light:var(--color-bg-orange);--color-pill-orange:hsl(
        var(--orange-h),
        calc(var(--orange-s) - 6%),
        87%
        );--color-pill-text-orange:hsl(
        calc(var(--orange-h) - 5),
        calc(var(--orange-s) - 18%),
        calc(var(--orange-l) - 28%)
        );--yellow-h:38;--yellow-s:62%;--yellow-l:49%;--color-yellow:hsl(
        var(--yellow-h),
        var(--yellow-s),
        var(--yellow-l)
        );--color-text-yellow:var(--color-yellow);--color-bg-yellow:hsl(
        var(--yellow-h),
        calc(var(--yellow-s) + 90%),
        90%
        );--color-bg-yellow-light:var(--color-bg-yellow);--color-pill-yellow:hsl(
        calc(var(--yellow-h) + 3),
        calc(var(--yellow-s) + 24%),
        90%
        );--color-pill-text-yellow:hsl(
        calc(var(--yellow-h) - 11),
        calc(var(--yellow-s) - 22%),
        calc(var(--yellow-l) - 28%)
        );--green-h:149;--green-s:31%;--green-l:39%;--color-green:hsl(var(--green-h), var(--green-s), var(--green-l));--color-text-green:var(--color-green);--color-bg-green:hsl(
        var(--green-h),
        var(--green-s),
        90%
        );--color-bg-green-light:var(--color-bg-green);--color-pill-green:hsl(
        calc(var(--green-h) - 28),
        calc(var(--green-s) + 3%),
        89%
        );--color-pill-text-green:hsl(
        calc(var(--green-h) - 2),
        var(--green-s),
        calc(var(--green-l) - 22%)
        );--blue-h:202;--blue-s:53%;--blue-l:43%;--color-blue:hsl(var(--blue-h), var(--blue-s), var(--blue-l));--color-text-blue:var(--color-blue);--color-bg-blue:hsl(
        var(--blue-h),
        var(--blue-s),
        90%
        );--color-bg-blue-light:var(--color-bg-blue);--color-pill-blue:hsl(
        var(--blue-h),
        calc(var(--blue-s) - 5%),
        85%
        );--color-pill-text-blue:hsl(
        calc(var(--blue-h) + 7),
        calc(var(--blue-s) - 6%),
        calc(var(--blue-l) - 22%)
        );--purple-h:274;--purple-s:32%;--purple-l:54%;--color-purple:hsl(
        var(--purple-h),
        var(--purple-s),
        var(--purple-l)
        );--color-text-purple:var(--color-purple);--color-bg-purple:hsl(
        var(--purple-h),
        var(--purple-s),
        90%
        );--color-bg-purple-light:var(--color-bg-purple);--color-pill-purple:hsl(
        var(--purple-h),
        calc(var(--purple-s) + 5%),
        90%
        );--color-pill-text-purple:hsl(
        calc(var(--purple-h) + 1),
        calc(var(--purple-s) + 10%),
        calc(var(--purple-l) - 31%)
        );--pink-h:328;--pink-s:48%;--pink-l:53%;
        --color-pink:hsl(var(--pink-h), var(--pink-s), var(--pink-l));
        --color-text-pink:var(--color-pink);--color-bg-pink:hsl(var(--pink-h),var(--pink-s),90%);
        --color-bg-pink-light:var(--color-bg-pink);--color-pill-pink:hsl(var(--pink-h),var(--pink-s),90%);
        --color-pill-text-pink:hsl(
        calc(var(--pink-h) + 3),
        calc(var(--pink-s) - 14%),
        calc(var(--pink-l) - 31%)
        );--red-h:2;--red-s:62%;--red-l:55%;--color-red:hsl(var(--red-h), var(--red-s), var(--red-l));--color-text-red:var(--color-red);--color-bg-red:hsl(
        var(--red-h),
        var(--red-s),
        90%
        );--color-bg-red-light:var(--color-bg-red);--color-pill-red:hsl(
        calc(var(--red-h) + 6),
        calc(var(--red-s) + 42%),
        90%
        );--color-pill-text-red:hsl(
        calc(var(--red-h) + 0),
        var(--red-s),
        calc(var(--red-l) - 32%));--default-h:45;--default-s:8%;--default-l:20%;
        --color-default:hsl(var(--default-h),var(--default-s),var(--default-l));
        --color-pill-default:hsl(var(--gray-h),var(--gray-s),90%);
        --color-pill-text-default:hsl(var(--gray-h),var(--gray-s),calc(var(--gray-l) - 28%));
        --color-text-default:#37352F;
        --color-text-default-light:#7d7c78;
        --color-bg-default:#ffffff;
        --color-border-default:#E9E9E7;
        --color-border-dark:var(--color-border-default);
        --color-ui-hover-bg:#efefef;
        --color-card-bg:#ffffff;
        --color-card-bg-hover:#f9f9f8;
        --color-calendar-weekend-bg:#f7f6f3;
        --color-checkbox-bg:#2EAADC;
        --color-code-bg:#efefef;
        --scrollbar-background-color:#FAFAFA;
        --scrollbar-thumb-color:#C1C1C1;
        --scrollbar-border-color:#E8E8E8;
        --navbar-text-color:#37352F;
        --navbar-list-item-hover:rgba(130, 130, 130, 0.09);
        --navbar-background-color-dark:#f0f0f0;
        --navbar-background-color:#ffffff;
        --navbar-button-text-color:#ffffff;
        --navbar-button-background-color:#37352F;
        --navbar-menu-background-color:var(--navbar-background-color);
        --footer-text-color:#37352F;
        --footer-background-color:#ffffff
          }
      </style>
    </Head>
  )
}
