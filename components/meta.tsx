import Head from "next/head";
import { useRouter } from "next/router";

import { siteMeta } from "lib/constants";
import siteImg from "images/ogp.jpg"

import { NextRouter } from "next/router";

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
  siteMeta;

type MetaProps = {
  pageTitle?: string;
  pageDesc?: string;
  pageImg?: string,
  pageImgW?: number,
  pageImgH?: number, 
};

const Meta = ({ pageTitle, pageDesc, pageImg, pageImgW, pageImgH }: MetaProps) => {
  
  const title: string = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const desc: string = pageDesc ?? siteDesc
  const router: NextRouter = useRouter()
  const url: string = `${siteUrl}${router.asPath}`
  const img: string = pageImg || siteImg.src
  const imgW: any = pageImgW || siteImg.width
  const imgH: any = pageImgH || siteImg.height
  const imgUrl: string = img.startsWith('https') ? img : `${siteUrl}${img}`

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />

      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />

      <meta property="og:image" content={imgUrl}/>
      <meta property="og:image:width" content={imgW}/>
      <meta property="og:image:height" content={imgH}/>
      <meta property="twitter:card" content="summary_large_image" />

    </Head>
  );
};

export default Meta;
