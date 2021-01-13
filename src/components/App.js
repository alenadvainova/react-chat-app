import "./App.css";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";
import MainSidePanel from "./MainSidePanel/MainSidePanel";

const App = ({
  currentUser,
  currentChannel,
  isPrivateChannel,
  userPosts,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <Grid
      columns="equal"
      className="app"
      style={{ background: secondaryColor }}
    >
      <MainSidePanel
        currentUser={currentUser}
        currentChannel={currentChannel}
        primaryColor={primaryColor}
      />

      <Grid.Column className="messagesColumn">
        {/* <Grid.Column> */}
        <Messages
          key={currentChannel && currentChannel.id}
          currentChannel={currentChannel}
          currentUser={currentUser}
          isPrivateChannel={isPrivateChannel}
        />
      </Grid.Column>

      <Grid.Column width="4">
        <MetaPanel
          key={currentChannel && currentChannel.name}
          isPrivateChannel={isPrivateChannel}
          currentChannel={currentChannel}
          userPosts={userPosts}
        />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  isPrivateChannel: state.channel.isPrivateChannel,
  userPosts: state.channel.userPosts,
  primaryColor: state.colors.primaryColor,
  secondaryColor: state.colors.secondaryColor,
});

export default connect(mapStateToProps)(App);