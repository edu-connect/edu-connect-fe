import React from "react";
import { string, instanceOf, func } from "prop-types";
import Datetime from "react-datetime";
import moment from "moment";

const InputTime = ({ cn, type, initValue, handleInputTime }) => (
  <Datetime
    className={cn}
    defaultValue={initValue}
    onBlur={time => handleInputTime(time, type)}
    dateFormat={false}
    inputProps={{ placeholder: "__ __ : __ __" }}
    timeConstraints={{ hours: { min: 9, max: 22 }, minutes: { step: 10 } }}
  />
);

InputTime.propTypes = {
  cn: string,
  type: string,
  initValue: instanceOf(moment),
  handleInputTime: func.isRequired
};

InputTime.defaultProps = {
  cn: "startTime",
  type: "startTime",
  initValue: moment({ hour: 12 })
};

export default InputTime;
