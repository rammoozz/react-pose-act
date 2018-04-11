import React from 'react';
import PropTypes from 'prop-types';

import posed, { PoseGroup } from 'react-pose';
const PosedFade = posed.div({
  enter: { opacity: 1 },
  before: { opacity: 0 },
  exit: { opacity: 0 }
})
const Loading = props => (
  <PoseGroup animateOnMount preEnterPose="before" enterPose={'enter'} exitPose={'exit'}>
    {props.isLoading && <PosedFade key={1}>Loading...</PosedFade>}
    {!props.isLoading && <PosedFade key={2}>{props.children}</PosedFade>}
  </PoseGroup>
    );


Loading.propTypes = {
  isLoading:PropTypes.bool.isRequired,
  children:PropTypes.any.isRequired
}
export default Loading;
