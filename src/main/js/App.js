import React, {Component} from "react";
import Panel from "./components/Panel";
import BoardWrapper from "./components/BoardWrapper";
import {getApiEndpoint as api} from "./api";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: []
        }

    }

    componentWillMount() {
        fetch(api())
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
                        <Panel jobResult={jobResult} key={jobResult.id}/>)
                    }
                </BoardWrapper>
            </div>
        );
    }
}

export default App;
