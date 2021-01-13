import React from "react";

import Panel from "../Panel/Panel";
import SidePanel from "../SidePanel/SidePanel";

class MainSidePanel extends React.Component {
  state = {
    showBackdrop: false,
  };

  setShowBackdrop = () => {
    this.setState((prevState) => ({
      showBackdrop: !prevState.showBackdrop,
    }));
  };

  render() {
    const { currentUser, currentChannel, primaryColor } = this.props;
    const { showBackdrop } = this.state;

    return (
      <React.Fragment>
        <Panel
          key={currentUser && currentUser.name}
          currentUser={currentUser}
          showBackdrop={showBackdrop}
          setShowBackdrop={this.setShowBackdrop}
        />
        <SidePanel
          key={currentUser && currentUser.uid}
          currentUser={currentUser}
          currentChannel={currentChannel}
          primaryColor={primaryColor}
          showBackdrop={showBackdrop}
          setShowBackdrop={this.setShowBackdrop}
        />
      </React.Fragment>
    );
  }
}

export default MainSidePanel;
