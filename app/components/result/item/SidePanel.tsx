/* eslint-disable */
// SidePanel.js
import { useState, useEffect } from 'react';
import Iframe from 'react-iframe';
import Loading from '@/app/components/base/loading'
import XClose from '@/app/components/base/icons/line/x-close'

const SidePanel = ({ url, onClose }: { url: string; onClose: () => void }) => {
  useEffect(() => {
    // 可能需要根据实际情况调整
    window.addEventListener('keydown', handleEscapeClose);
    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
    };
  }, []);

  const handleEscapeClose = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="side-panel">
      <div className="side-panel-content">
        <button onClick={onClose}><XClose className='w-8 h-8 text-primary-600' /></button>
        {/* <iframe src={url} title="Preview" /> */}
        {isLoading && <div className='closeBtn'><Loading type='area' /></div>}
        <Iframe
          url={url}
          onLoad={handleLoad}
          className="mt-7"
          display="initial"
          position="relative"
        />
      </div>
    </div>
  );
};
export default SidePanel;
