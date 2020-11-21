import React, {Component} from 'react';
import '../App.css';


//function components
function GroupCard(props){
    return (
        <div className="Data">
            <img/>
            <h4>{props.nama}</h4>
            <p>{props.nim}</p>
            <Select>
                <option value="" hidden>Kelas</option>
                <option value="1">A</option>
                <option value="2">B</option>
            </Select>
        </div>
    );
}

//class components
export default class Card extends Component {
    render() {
        const background={
            backgroundColor : this.props.bgcolor
        }
        return (
            <div className="wrapper">
                <div className="User-info" style={background}>
                    <GroupCard nama="Jonathan Imago D.G" nim="21120117130054"/>
                </div>
                <div className="User-info" style={background}>
                    <GroupCard nama="Novazira A.F" nim="21120117130047"/>
                </div>
            </div>
        );
    }
}