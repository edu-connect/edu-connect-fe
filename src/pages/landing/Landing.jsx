import React, { Component } from "react";
import moment from "moment";
import { Button } from "semantic-ui-react";

// https://github.com/moment/moment/issues/2962#issuecomment-255637859
import "moment/locale/ko";

import InputTime from "../../common/InputTime/InputTime";

const timePickerData = [
  { cn: "start-time", hour: 9, type: "startTime" },
  { cn: "end-time", hour: 22, type: "endTime" }
];

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: { hour: null, minute: null },
      endTime: { hour: null, minute: null }
    };

    this.handleInputTime = this.handleInputTime.bind(this);
  }

  handleInputTime(time, type) {
    const hour = time.hour();
    const minute = time.minute();

    this.setState({ [type]: { hour, minute } });
  }

  renderInputTime() {
    return timePickerData.map(({ cn, type, hour }) => (
      <InputTime
        cn={cn}
        type={type}
        initValue={moment({ hour })}
        handleInputTime={this.handleInputTime}
      />
    ));
  }

  render() {
    const { startTime, endTime } = this.state;

    return (
      <div>
        <p>{`startTime: ${moment(startTime).format("LT")}`}</p>
        <p>{`endTime: ${moment(endTime).format("LT")}`}</p>
        {this.renderInputTime()}
        <Button>버튼</Button>
      </div>
    );
  }
}

export default Landing;
