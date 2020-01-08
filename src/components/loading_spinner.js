import React from "react";
import spinner from "../assets/Eclipse-0.6s-100px.svg"
import { usePromiseTracker } from "react-promise-tracker";

export function LoadingSpinner (props){
    const { promiseInProgress } = usePromiseTracker();
    
    return(
        promiseInProgress && 
        <div className="spinner-overlay">
            <Triangle/>
        </div>
    );
}

class Triangle extends React.Component{
    render(){
        return(
            <img src={spinner} className="loading-spinner"></img>
        );
    }
}