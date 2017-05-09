import React from 'react';

export default class App extends React.Component {

  render() {
    const styles = {
      app: {
        padding: '0px',
        margin: '0px',
        width: '100vw',
        height: '100vh',
      },
    };
    return (
      <div>
        <div style={styles.app}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.any,
  routes: React.PropTypes.array,
};
