import { Component } from "react";

//import './todolist.css'

class ToDo extends Component{
    render(){
        const id=this.props.id;
        const defaultChecked=this.props.defaultChecked;
        const title=this.props.title;
        return (
            <li className="todo stack-small">
                    <div className="c-cb">
                    <input id={id} type="checkbox" defaultChecked={defaultChecked} />
                    <label className="todo-label" htmlFor={id}>
                        {title}
                    </label>
                    </div>
                    <div className="btn-group">
                    <button type="button" className="btn">
                        Edit <span className="visually-hidden">
                        {title}</span>
                    </button>
                    <button type="button" className="btn btn__danger">
                        Delete <span className="visually-hidden">
                        {title}</span>
                    </button>
                    </div>
                </li>
        );
    }
}

export default class ToDoList extends Component{
    render(){
        return(
            <div className="todoapp stack-large">
                <h1>TodoMatic</h1>
                <form>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                />
                <button type="submit" className="btn btn__primary btn__lg">
                    Add
                </button>
                </form>
                <div className="filters btn-group stack-exception">
                <button type="button" className="btn toggle-btn" aria-pressed="true">
                    <span className="visually-hidden">Show </span>
                    <span>all</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Active</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Completed</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
                </div>
                <h2 id="list-heading">
                3 tasks remaining
                </h2>
                <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
                >
                <ToDo title="Eat" id="todo-0" defaultChecked="True"/>
                <ToDo title="Sleep" id="todo-1" defaultChecked="False"/>
                <ToDo title="Repeat" id="todo-2" defaultChecked="False"/>
                </ul>
            </div>
        );
    }
    
}

