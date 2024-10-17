import React, { useState, useEffect, useRef } from 'react';

const Cell = ({ isTitle, title }) => {
  const [content, setContent] = useState(title ?? '');
  const textareaRef = useRef(null);

  const handleClick = () => {
    switch (content) {
      case '':
        setContent('X');
        break;
      case 'X':
        setContent('✔');
        break;
      case '✔':
        setContent('O');
        break;
      case 'O':
        setContent('');
        break;
      default:
        setContent('');
    }
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
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            border: 'none',
            wordWrap: 'break-word',
            resize: 'none',
            fontFamily: 'Arial',
            fontWeight: 'bold',
            fontSize: '11px',
            overflow: 'hidden',
            textAlign: 'center',
            display: 'block',
            boxSizing: 'border-box',
          }}
        />
      ) : (
        content
      )}
    </td>
  );
};

export default Cell;