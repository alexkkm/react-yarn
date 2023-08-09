import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodePresenter = ({ code }) => {
    return (
      <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    );
};

export default CodePresenter;

