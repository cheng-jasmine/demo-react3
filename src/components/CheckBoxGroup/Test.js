import React, { Component } from 'react'
import CheckBoxGroup from './index'
import {getAllStudents} from "../../services"

export default class Test extends Component {

    state = {
        datas: [
            // { value: "football", text: "足球" },
            // { value: "baseball", text: "篮球" },
            // { value: "movie", text: "电影" },
            // { value: "music", text: "音乐" },
            // { value: "other", text: "其他" },
        ],
        chooseDatas: [],
    }

    async componentDidMount(){
        const stus = await getAllStudents()
        this.setState({
            datas: stus.map(it=>({
                value: it.id.toString(),
                text: it.name
            }))
        })
    }

    render() {
        return (
            <div>
                <CheckBoxGroup
                    name="loves"
                    {...this.state}
                    onChange={newArr => {
                        this.setState({
                            chooseDatas: newArr
                        })
                    }}
                />
            </div>
        )
    }
}
