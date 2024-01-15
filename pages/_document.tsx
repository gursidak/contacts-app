import {
  DocumentHeadTags,
  documentGetInitialProps,
} from "@mui/material-nextjs/v13-pagesRouter";
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter';

import { Html, Main, NextScript, Head, DocumentProps, DocumentContext } from "next/document";

export default function MyDocument(props:DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
         <DocumentHeadTags {...props} />
      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx:DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
