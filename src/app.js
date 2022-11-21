import React from "react";
import { Counter } from "./Counter";
import { HelloWorld } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render(){
        return(
            <div>
                <HelloWorld />
                <Welcome name="John" age={12} />
                <Counter start={32} increment={2} time={1000}/>
            </div>
        )

    }
}
