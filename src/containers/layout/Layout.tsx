import React, { Component, Fragment, MouseEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../store';

import { Form } from '../../components/Form';
import { LayoutMenu } from '../../components/LayoutMenu';

import { updateText } from '../../actions/text';

export class LayoutUI extends Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>,
  { textByCols: Array<string> }
> {
  state = {
    textByCols: [this.props.text],
  };

  layout = (event: MouseEvent<HTMLButtonElement>, numOfCols: number) => {
    const { text } = this.props;
    const { textByCols } = this.state;
    if (textByCols.length === numOfCols) return;

    const colLength = Math.floor(text.length / numOfCols);
    const res: Array<string> = [];
    let startIndex = 0;
    Array(numOfCols)
      .fill(0)
      .forEach((item, index) => {
        const endIndex =
          index + 1 === numOfCols ? text.length : text.indexOf(' ', colLength * (index + 1));
        res.push(text.substring(startIndex, endIndex));
        startIndex = endIndex;
      });
    this.setState({ textByCols: res });
  };

  processText = (text: string, areaId: number) => {
    const { textByCols } =  this.state;
    textByCols[areaId] = text;
    
    this.props.updateText(textByCols.join(''));
  }

  render() {
    const { textByCols } = this.state;
    return (
      <Fragment>
        <LayoutMenu onClick={this.layout} />
        <div className="layout-grid">
          {textByCols.map((text, index) => (
            <Form key={index} defaultValue={text} areaId={index}  processText={this.processText} />
          ))}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state: AppState) {
  return { text: state };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateText: (text: string) => dispatch(updateText(text)),
  };
}

export const Layout = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutUI);
