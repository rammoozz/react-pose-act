import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner'
import posed, { PoseGroup } from 'react-pose';
const PosedFade = posed.div({
  enter: { opacity: 1 },
  before: { opacity: 0 },
  exit: { opacity: 0 }
})

const Loading = props => (
  <PoseGroup animateOnMount preEnterPose="before" enterPose={'enter'} exitPose={'exit'}>
    {props.isLoading && <PosedFade key={1}>{props.loadingComp || <Spinner className="loader"/>}</PosedFade>}
    {!props.isLoading && <PosedFade key={2}>{props.children}</PosedFade>}
  </PoseGroup>
    );

Loading.defaultProps = {
  isLoading:true,
  loadingComp:null,
  children:null
}
Loading.propTypes = {
      /** This is your loading State */
  isLoading:PropTypes.bool.isRequired,
      /** This is an Optional Loader (any) */
  loadingComp:PropTypes.any,
      /** This renderes once loading is false */
  children:PropTypes.any.isRequired
}
export default Loading;
