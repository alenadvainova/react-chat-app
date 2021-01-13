import React from "react";
import firebase from "../../firebase";
import { connect } from "react-redux";
import { setColors } from "../../actions";

import {
  Button,
  Divider,
  Modal,
  Icon,
  Label,
  Segment,
} from "semantic-ui-react";
import { CompactPicker } from "react-color";

class ColorPanel extends React.Component {
  state = {
    modal: false,
    primaryColor: "",
    secondaryColor: "",
    usersRef: firebase.database().ref("users"),
    user: this.props.currentUser,
    userColors: [],
  };

  componentDidMount() {
    if (this.state.user) {
      this.addListener(this.state.user.uid);
    }
  }

  componentWillUnmount() {
    this.removeListener();
  }

  removeListener = () => {
    this.state.usersRef.child(`${this.state.user.uid}/colors`).off();
  };

  addListener = (userId) => {
    let userColors = [];
    this.state.usersRef.child(`${userId}/colors`).on("child_added", (snap) => {
      userColors.unshift(snap.val());
      this.setState({
        userColors,
      });
    });
  };

  openModal = () => this.setState({ modal: true });

  closeModal = () =>
    this.setState({ modal: false, primaryColor: "", secondaryColor: "" });

  handleChangePrimaryColor = (color) =>
    this.setState({ primaryColor: color.hex });

  handleChangeSecondaryColor = (color) =>
    this.setState({ secondaryColor: color.hex });

  handleSaveColors = () => {
    if (this.state.primaryColor && this.state.secondaryColor) {
      this.saveColors(this.state.primaryColor, this.state.secondaryColor);
    }
  };

  saveColors = (primaryColor, secondaryColor) => {
    this.state.usersRef
      .child(`${this.state.user.uid}/colors`)
      .push()
      .update({
        primaryColor,
        secondaryColor,
      })
      .then(() => {
        this.closeModal();
      })
      .catch((err) => console.error(err));
  };

  displayUserColors = (colors) =>
    colors.length > 0 &&
    colors.map((color, i) => (
      <React.Fragment key={i}>
        <Divider />
        <div
          className="color__container"
          onClick={() =>
            this.props.setColors(color.primaryColor, color.secondaryColor)
          }
        >
          <div
            className="color__squarer"
            style={{ background: color.primaryColor }}
          >
            <div
              className="color__overlay"
              style={{ background: color.secondaryColor }}
            ></div>
          </div>
        </div>
      </React.Fragment>
    ));

  render() {
    const { modal, primaryColor, secondaryColor, userColors } = this.state;

    return (
      <React.Fragment>
        <Button icon="add" size="small" color="blue" onClick={this.openModal} />
        {this.displayUserColors(userColors)}
        <Modal basic open={modal} onClose={this.closeModal}>
          <Modal.Header>Choose App Color</Modal.Header>
          <Modal.Content>
            <Segment inverted>
              <Label content="Primary Color" />
              <CompactPicker
                color={primaryColor}
                onChange={this.handleChangePrimaryColor}
              />
            </Segment>

            <Segment inverted>
              <Label content="Secondary Color" />
              <CompactPicker
                color={secondaryColor}
                onChange={this.handleChangeSecondaryColor}
              />
            </Segment>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={this.handleSaveColors}>
              <Icon name="checkmark" />
              Save Colors
            </Button>
            <Button color="red" inverted onClick={this.closeModal}>
              <Icon name="remove" />
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect(null, { setColors })(ColorPanel);
