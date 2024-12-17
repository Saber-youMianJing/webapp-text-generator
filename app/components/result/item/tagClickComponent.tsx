/* eslint-disable */
import { useState } from 'react';
import SidePanel from './SidePanel';

const YourMainComponent = () => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

  const openSidePanel = (url: any) => {
    setPreviewUrl(url);
    setIsSidePanelOpen(true);
  };

  const closeSidePanel = () => {
    setIsSidePanelOpen(false);
  };

  return (
    <>
      <div className="content">
        {/* ...其他内容... */}
        {isSidePanelOpen && (
          <SidePanel url={previewUrl} onClose={closeSidePanel} />
        )}
      </div>
      {/* ...其他内容... */}
    </>
  );
};

export default YourMainComponent;
