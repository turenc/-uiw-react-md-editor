import React, { Fragment } from 'react';
import ExampleCustomToolbar from './ExampleCustomToolbar';
import Logo from './Logo';
import './App.less';

export default function App() {
  return (
    <Fragment>
      <a
        className="product-hunt"
        href="https://www.producthunt.com/posts/react-markdown-editor?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-react-markdown-editor"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=300765&theme=light"
          alt="react markdown editor - A simple markdown editor with preview, with React | Product Hunt"
          height="38"
        />
      </a>
      <div className="warpper">
        <header className="header">
          <Logo />
        </header>
        <div className="badges">
          <a href="https://www.npmjs.com/package/@uiw/react-md-editor" target="__blank">
            <img alt="Downloads" src="https://img.shields.io/npm/dm/@uiw/react-md-editor.svg?style=flat" />
          </a>
          <a href="https://coveralls.io/github/uiwjs/react-md-editor?branch=master" target="__blank">
            <img
              alt="Coverage Status"
              src="https://coveralls.io/repos/github/uiwjs/react-md-editor/badge.svg?branch=master"
            />
          </a>
        </div>
        <div className="page-title">
          Custom toolbar.
          <a
            target="__blank"
            href="https://github.com/uiwjs/react-md-editor/blob/0bf21785b5748c33add999e478a9d804e0505b4c/website/ExampleCustomToolbar.tsx#L4-L67"
          >
            Example Code
          </a>
        </div>
        <ExampleCustomToolbar />
        <div className="page-title">
          Support Custom KaTeX Preview.
          <a
            target="__blank"
            href="https://github.com/uiwjs/react-md-editor/blob/55da02055420451f4a1a6dc4100add390cdf05cd/website/ExmapleKaTeX.tsx#L1-L60"
          >
            Example Code
          </a>
        </div>
      </div>
    </Fragment>
  );
}
