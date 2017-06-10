import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from '../styles/panoViewer.style';

const ExamplePageText = () => (
  <p style={s.p}>
    This is an example page. Refresh the page or copy/paste the url to
    test out the redirect functionality (this same page should load
      after the redirect).
  </p>
);

const PanoView = () => (
  <div className="panoview">
    <img className="panoview-image" src="resources/images/panorama_arboretum_1.jpg" alt="Arboretum Panorama" />
  </div>
);

export default function PanoViewer() {
  return (
    <Switch>
      <Route
        exact path="/panoviewer/two-deep"
        render={({ location }) => (
          <div>
            <ExamplePageText />
            <ExampleTwoDeepComponent location={location} />
          </div>
        )}
      />
      <Route
        exact path="/panoviewer"
        render={() => (
          <div>
            <PanoView />
            <div style={s.pageLinkContainer}>
              <Interactive
                as={Link}
                {...s.link}
                to="/panoviewer/two-deep?field1=foo&field2=bar#boom!"
              >Example two deep with query and hash</Interactive>
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}
