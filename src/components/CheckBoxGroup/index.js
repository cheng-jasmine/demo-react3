import React, { Component } from 'react';
import PropTypes from 'prop-types'
import types from '../../utils/commonTypes'

class CheckBoxGroup extends Component {

    // 设置属性默认值
    static defaultProps = {
        datas: [],
        chooseDatas: []
    }

    // 配置属性类型
    static propTypes = {
        datas: types.groupDatas.isRequired,
        name: PropTypes.string.isRequired,
        chooseDatas: types.chooseDatas,
        onChange: PropTypes.func
    }

    handleChange = (e) => {
        let newArr
        if (e.target.checked) {
            newArr = [...this.props.chooseDatas, e.target.value]
        } else {
            newArr = this.props.chooseDatas.filter(it => it !== e.target.value)
        }
        this.props.onChange && this.props.onChange(newArr, this.props.name, e)
    }

    /**
     * 获取一组多选框
    */
    getLovesCheckBoxs() {
        return this.props.datas.map(it => (
            <label key={it.value}>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={it.value}
                    checked={this.props.chooseDatas.includes(it.value)}
                    onChange={this.handleChange}
                />
                {it.text}
            </label>
        ))
    }


    render() {
        const bs = this.getLovesCheckBoxs()
        return (
            <div>
                {bs}
            </div>
        );
    }
}

export default CheckBoxGroup;