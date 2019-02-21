import React from 'react';
import { renderToString } from 'react-dom/server';
import { onPageLoad } from 'meteor/server-render';
import { Helmet } from 'react-helmet';

import App from '../../ui/App.js'

onPageLoad((sink) => {
  sink.renderIntoElementById('app', renderToString(<App location={sink.request.url} />));

  const helmet = Helmet.renderStatic();
  sink.appendToHead(helmet.meta.toString());
  sink.appendToHead(helmet.title.toString());
});