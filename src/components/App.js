import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PanoViewer from './PanoViewer';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

export default function App() {
  return (
    <div className="root" style={s.root}>
      <h1 style={s.title}>Panomod Panorama Viewer</h1>
      <Interactive
        as="a"
        href="https://github.com/stephenburgess8/panomod"
        style={s.repoLink}
        {...s.link}
      >https://github.com/stephenburgess8/panomod</Interactive>

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/panoviewer" component={PanoViewer} />
        <Route component={PageNotFound} />
      </Switch>

      <div style={s.creditLine}>
        <Interactive
          as="a"
          href="http://www.uxstephen.com"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
          Code and concept by <span {...s.childLink}>Stephen Burgess</span>
        </Interactive>
      </div>
    </div>
  );
}
