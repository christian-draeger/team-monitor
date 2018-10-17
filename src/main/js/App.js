import React, {Component} from "react";
import Panel from "./components/Panel";
import BoardWrapper from "./components/BoardWrapper";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: []
        }

    }

    componentWillMount() {
        fetch("http://localhost:8182/data")
            .then(response => response.json())
            .then((data) => {
                this.setState({result: data})
            });
    }

    render() {
        return (
            <div style={{height: "98vh"}}>
                <BoardWrapper>
                    {this.state.result.map(jobResult =>
                        <Panel jobResult={jobResult}/>)
                    }
                </BoardWrapper>
            </div>
        );
    }
}

export default App;
