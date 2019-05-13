import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: '1005801332718-jbs8adcp15smckir39i7kr5u0phd9gub.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if we're signed in</div>
    } else if (this.state.isSignedIn) {
      return <div>I'm in</div>
    } else {
      return <div>Not signed in</div>
    }
  }

  render() {
    return <div>{this.renderAuthButton}</div>
  }
}

export default GoogleAuth;