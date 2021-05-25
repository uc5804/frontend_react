import {Component} from "react";


class LOOP extends Component{
    render(){
      return (
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.title}</td>
          <td>{this.props.content}</td>
          <td>{this.props.author}</td>
        </tr>
      );
    }
}
export default LOOP;
