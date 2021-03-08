import React, { useState, useEffect } from 'react';

const addHttps = (url) => {
  if (!url.startsWith('http') || !url.startsWith('https')) {
    return `https://${url}`;
  }
  return url;
};

const AddressBar = ({ update, url }) => {
  const [value, setValue] = useState(url || '');

  useEffect(() => {
    setValue(url);
  }, [url]);

  const submitHandler = (e) => {
    e.preventDefault();

    // check for https
    const httpsUrl = addHttps(value);
    update(httpsUrl);
  };

  return (
    <div className='address-bar'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          name='url'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddressBar;
