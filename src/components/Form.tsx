import React, { PureComponent, ChangeEvent } from 'react';

export interface FormyProps {
  defaultValue: string;
  processText: (value: string, areaId: number) => void;
  autofocus: boolean;
  placeholder: string;
  areaId: number;
}

export interface FormyState {
  value: string;
}

export class Form extends PureComponent<FormyProps, FormyState> {
  static defaultProps = {
    defaultValue: '',
    autofocus: false,
    placeholder: '',
    areaId: 0,
  };

  state = {
    value: this.props.defaultValue,
  };


  handleClick = () => this.props.processText(this.state.value, this.props.areaId);

  handleChange = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) =>
    this.setState(() => ({value}))

  render() {
    const { value } = this.state;
    const { autofocus, placeholder } = this.props;
    return (
      <div>
        <textarea
          autoFocus={autofocus}
          value={value}
          onChange={this.handleChange}
          onBlur={this.handleClick}
          placeholder={placeholder}
          className="text-area"
          rows={40}
          cols={80}
        />
        <div >
        </div>
      </div>
    );
  }
}
