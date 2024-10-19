import React, { useState, useEffect, useRef } from 'react';

const Symbols = ['X', '/', 'O', '✔'];
const Cell = ({ isTitle, title, rowIndex, colIndex, onContentChange }) => {
  const label = title !== '' && typeof title === 'number' ? Symbols[title] : undefined;
  const [content, setContent] = useState(label ?? title ?? '');
  const [contentId, setContentId] = useState((label && title) || -1);
  const textareaRef = useRef(null);

  const handleClick = () => {
    const newContentId = (contentId + 1) % (Symbols.length + 1);
    const newContent = Symbols[newContentId] ?? '';
    setContent(newContent);
    setContentId(newContentId);
    onContentChange(rowIndex, colIndex, newContent, newContentId);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '14px';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  return (
    <td
      onClick={isTitle ? undefined : handleClick}
      style={{
        width: '50px',
        height: '50px',
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
        cursor: isTitle ? 'text' : 'pointer',
        backgroundColor: isTitle ? '#c0c0c0' : 'white',
        border: '5px solid blue',
        borderRadius: '15px',
      }}
    >
      {isTitle ? (
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            onContentChange(rowIndex, colIndex, e.target.value);
          }}
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            border: 'none',
            wordWrap: 'break-word',
            resize: 'none',
            fontFamily: 'DejaVu Sans Mono',
            fontSize: '12px',
            overflow: 'hidden',
            textAlign: 'center',
            display: 'block',
            boxSizing: 'border-box',
            fontWeight: isTitle ? 'bold' : 'normal',
          }}
        />
      ) : (
        content
      )}
    </td>
  );
};

export default Cell;