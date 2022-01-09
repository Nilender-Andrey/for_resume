import React from 'react';
import './Code.scss';

function Code() {
  return (
    <section className="section-broad" id="code">
      <h2 className="subtitle">code</h2>
      <div className="decoration decoration_color_dark-grey" />
      <pre className="code">
        {'function maxMin(arr1, arr2) {\n'}
        {
          '  let res = arr1.map((item, index) => Math.abs(item - arr2[index]));\n'
        }
        {'  return [Math.max(...res), Math.min(...res)];\n'}
        {'}'}
      </pre>
    </section>
  );
}

export default Code;
