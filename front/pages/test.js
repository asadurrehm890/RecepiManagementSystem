import React from 'react';
import  {decode, encode}  from 'html-entities';


function Example() {
  const html = '<p>Hello, <strong>world!</strong></p>';
 
  // Convert HTML to text
  const text = encode(html);

  // Convert text back to HTML
 
  const decodedHtml = decode(text);

  return (
    <div>
      <p>Original HTML: {html}</p>
      <p>Converted text: {text}</p>
	  
	  <div dangerouslySetInnerHTML={{ __html: decodedHtml }} />
    
    </div>
  );
}

export default Example;
