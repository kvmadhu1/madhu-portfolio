import { useState, useEffect, useRef } from 'react';
import styles from './ResumeDownload.module.css';

function ResumeDownload() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDownload = () => {
    setOpen(false); // close after selecting PDF/Word
  };

  return (
    <div className={styles.resumeDownload} ref={dropdownRef}>
      <button 
        className={styles.button} 
        onClick={() => setOpen(!open)}
      >
        Download Resume ▼
      </button>

      {open && (
        <div className={styles.dropdown}>
          <a 
            href="/Madhu_KV_FrontEnd_Developer_Resume.pdf" 
            download 
            onClick={handleDownload}
          >
            PDF
          </a>
          <a 
            href="/Madhu_KV_FrontEnd_Developer_Resume.docx" 
            download 
            onClick={handleDownload}
          >
            Word
          </a>
        </div>
      )}
    </div>
  );
}

export default ResumeDownload;
