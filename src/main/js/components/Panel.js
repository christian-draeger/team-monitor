import React from "react";
import styled from "styled-components";

const getStatusRelatedColor = (status) => {
    let color;
    switch(status) {
        case "success":
            color = "green";
            break;
        case "failure":
            color = "red";
            break;
        case "building":
            color = "grey";
            break;
        case "abort":
            color = "lightgrey";
            break;
        case "error":
            color = "darkred";
            break;
        default:
            color = "blue";
    }

    return color;
};

const StyledPanel = styled.div`
    background-color: ${props => getStatusRelatedColor(props.status)};
    //background-color: green;
    min-height: 100px;
    max-height: 100vh;
    font-size: 24px;
    border-radius: 5px;
`;

const Panel = ({jobResult}) => {
    console.log(jobResult.status);
    return (
        <StyledPanel status={jobResult.status}>{jobResult.jobName}</StyledPanel>
    );
};

export default Panel;