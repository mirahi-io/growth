import React, { FC, useEffect, useRef, useState, Fragment } from 'react';

export type GoogleFontsProps = {
  hrefs: string[];
};

const GoogleFonts: FC<GoogleFontsProps> = ({ hrefs }) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `</script>${hrefs
          .map(
            (href) =>
              `<link rel="preload" href="${href}" as="style" onLoad="this.onload=null;this.rel='stylesheet'" crossOrigin="anonymous"/>`
          )
          .join('')}<script>`,
      }}
    />
  );
};

export default GoogleFonts;
