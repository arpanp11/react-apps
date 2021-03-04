import React, { useState } from 'react';

import marked from 'marked';
import ReactMarkdown from 'react-markdown';

import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('# sup');

  const changeHandler = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className='app'>
      <textarea onChange={changeHandler} value={markdown} />

      {/* <div
        className='preview'
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /> */}
      <ReactMarkdown className='preview' children={markdown}></ReactMarkdown>
    </div>
  );
}
