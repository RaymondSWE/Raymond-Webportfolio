import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text = '', speed = 100 }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < text.length ) {
        setContent(prevContent => prevContent + text.charAt(index));
        console.log(text.charAt(index)); 
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

  useEffect(() => {
    setContent('');
  }, [text]);

  return <span>{content}</span>;
};

export default TypingEffect;
