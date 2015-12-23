import React, { PropTypes } from 'react';
import { Button, Card, CardText, CardTitle, CardMenu, CardActions, Icon, Textfield } from 'react-mdl';

const propTypes = {
  onValueChanged: PropTypes.func.isRequired,
};

const defaultProps = {};

class Configuration extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeIconEmoji = this.onChangeIconEmoji.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

    this.state = {};
  }

  componentWillReceiveProps(props) {
    this.getState(props.app);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeIconEmoji(e) {
    this.setState({
      icon_emoji: e.target.value,
    });
  }

  onClickSave() {
    const { username, icon_emoji } = this.state;
    this.props.onValueChanged({
      username,
      icon_emoji,
    });
  }

  getState({ username, icon_emoji }) {
    this.setState({
      username,
      icon_emoji,
    });
  }

  render() {
    return (
      <Card shadow={0} style={{
        width: '100%',
      }}>
        <CardTitle>Bot Configuration</CardTitle>
        <CardText>
          <h6 className="no-margin">Username</h6>
          <Textfield
            onChange={this.onChangeUsername}
            value={this.state.username}
            label="Username..."
          />

          <h6 className="no-margin">Icon Emoji</h6>
          <Textfield
            onChange={this.onChangeIconEmoji}
            value={this.state.icon_emoji}
            label="Icon Emoji..."
          />
        </CardText>
        <CardActions border>
          <Button colored ripple onClick={this.onClickSave}>Save</Button>
        </CardActions>
        <CardMenu>
          <Icon name="face" />
        </CardMenu>
      </Card>
    );
  }
}

Configuration.propTypes = propTypes;
Configuration.defaultProps = defaultProps;

export default Configuration;
