import React from "react";
import { Button } from "semantic-ui-react";

class Toggle extends React.Component {
  render() {
    const { handleClick } = this.props;

    return (
      <Button
        className="toggle__btn"
        icon="bars"
        size="small"
        onClick={handleClick}
      />
    );
  }
}

export default Toggle;
