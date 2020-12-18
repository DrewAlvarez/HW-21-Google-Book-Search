import React from "react";

export default function SearchedCard(props) {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={props.imgSrc} alt="..."/>
                </div>
                <div className="col-md-10" style={{height: "12.5rem", overflow: "auto"}}>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.subTitle}</p>
                        <h6 className="card-text">By: {props.author}</h6>
                        <p className="card-text">{props.summary}</p>
                    </div>
                    <button 
                        type="button"
                        className="btn btn-success"
                        onClick={props.handleClick}
                        style={{marginTop: ".5rem"}}
                        >{props.saveDelete} Book</button>
                    <a href={props.view} target="_blank">
                        <button 
                            type="button"
                            className="btn btn-success"
                            style={{marginTop: ".5rem"}}
                            >View Book</button>
                    </a>
                </div>
            </div>
        </div>
    )
}