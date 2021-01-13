import React from "react";

import { Divider, Menu, Sidebar } from "semantic-ui-react";
import ColorPanel from "./ColorPanel";
import Toggle from "./Toggle";

class Panel extends React.Component {
  render() {
    const { currentUser, setShowBackdrop } = this.props;

    return (
      <Sidebar
        as={Menu}
        icon="labeled"
        inverted
        vertical
        visible
        width="very thin"
      >
        <Toggle handleClick={setShowBackdrop} />
        <Divider />
        <ColorPanel currentUser={currentUser} />
      </Sidebar>
    );
  }
}

export default Panel;
