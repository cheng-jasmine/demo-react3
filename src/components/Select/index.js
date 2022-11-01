import React, { Component } from 'react';
import PropTypes from 'prop-types'
import types from '../../utils/commonTypes'
import withDataGroup from "../HOC/withDataGroup";


class Option extends Component {
    static propTypes = {
        info: types.singleData.isRequired, // 当前单选框的对象数据
    }

    render() {
        return <option value={this.props.info.value}>
            {this.props.info.text}
        </option>
    }
}

const OptGroup = withDataGroup(Option)

export default class Select extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired, // 当前选中的value值
        onChange: PropTypes.func,
    }

    render() {
        return <select
            name={this.props.name}
            value={this.props.value}
            onChange={(e) => {
                this.props.onChange && this.props.onChange(e.target.value)
            }}
        >
            <OptGroup {...this.props} />
        </select>
    }
}

// export default Select;