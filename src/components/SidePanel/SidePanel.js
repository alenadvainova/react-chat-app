import React from "react";
import { Menu } from "semantic-ui-react";

import Backdrop from "./Backdrop";
import Channels from "./Channels";
import DirectMessages from "./DirectMessages";
import Starred from "./Starred";
import UserPanel from "./UserPanel";

class SidePanel extends React.Component {
  render() {
    const {
      currentUser,
      currentChannel,
      primaryColor,
      showBackdrop,
      setShowBackdrop,
    } = this.props;

    let classes = ["sidePanel"];
    if (showBackdrop) {
      classes = classes.concat("sidePanelOpen");
    } else {
      classes = classes.concat("sidePanelClose");
    }

    return (
      <React.Fragment>
        {showBackdrop && (
          <Backdrop showBackdrop={showBackdrop} handleClick={setShowBackdrop} />
        )}
        <Menu
          size="large"
          inverted
          fixed="left"
          stackable
          vertical
          style={{
            background: primaryColor,
            fontsize: "1.2rem",
          }}
          className={classes.join(" ")}
        >
          <UserPanel currentUser={currentUser} primaryColor={primaryColor} />
          <Starred currentUser={currentUser} currentChannel={currentChannel} />
          <Channels currentUser={currentUser} currentChannel={currentChannel} />
          <DirectMessages
            currentUser={currentUser}
            currentChannel={currentChannel}
          />
        </Menu>
      </React.Fragment>
    );
  }
}

export default SidePanel;
