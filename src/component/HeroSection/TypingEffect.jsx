import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text = '', speed = 50 }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setContent(prevContent => prevContent + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
      setContent(''); 
    };
  }, [text, speed]);

  return <span>{content}</span>;
};

export default TypingEffect;
