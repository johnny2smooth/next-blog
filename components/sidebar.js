import { useEffect, useState } from 'react';
import layouts from '../styles/layouts.module.css';

// When I have more data to render, I want to gather that info from another location
// and then pop it in here in a more structured way. Title, blurb, main content, media, etc...

export default function SidebarWrapper({ direction = 'left', sidebar, main }) {
  return (
    <>
      <div className={layouts.withSidebar} data-direction={direction}>
        {direction === 'right' ? [main, sidebar] : [sidebar, main]}
      </div>
    </>
  );
}
