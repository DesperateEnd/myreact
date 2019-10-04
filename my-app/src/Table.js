import React, {Component} from 'react';
const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}
const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {//map 映射遍历 传递过来的列表数组
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });
 
    return <tbody>{rows}</tbody>;
}
class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData} //传递 列表数组
                    removeCharacter={removeCharacter} //传递 删除方法
                />
            </table>
        );
    }
}

 
export default Table;