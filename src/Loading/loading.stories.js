import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Loading from '../Loading';
import { withInfo } from '@storybook/addon-info';


class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        isLoading: !this.state.isLoading
      });
    }, 1500);
  }
  render() {
      const {children} = this.props
      const {isLoading} = this.state
    return <Loading isLoading={isLoading}>{children}</Loading>;
  }
}
storiesOf('Loading', module)

  .add('Fade In',
    withInfo({propTables:[Loading],propTablesExclude:[Foo],text:`
      
      import Loading from 'react-pose-act/lib/Loading'
       
      ~~~js
      <Loading isLoading={isLoading}>Hi!</Loading>
      ~~~
      
      
    `})(() =>
      <Foo>Hi!</Foo>
    )
  )