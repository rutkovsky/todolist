import React, {useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    setTasks: Function
}

export function Todolist(props: PropsType) {

    function removeTask(id: number) {
        let filteredTasks = props.tasks.filter(t => t.id != id);
        props.setTasks(filteredTasks);
    }

    function removeAllTask() {
        let removingTasks = props.tasks.filter(t => false);
        props.setTasks(removingTasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>('all');

    let tasksForTodolist = props.tasks;

    if (filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => t.isDone === false);
    }
    if (filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true);
    }
    if (filter === 'first3') {
        tasksForTodolist = props.tasks.filter(t => t.id < 4);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                tasksForTodolist.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {
                        removeTask(t.id)
                    }}>x
                    </button>
                </li>)
            }
        </ul>
        <div>
            <div>
                <button onClick={() => {
                    removeAllTask()
                }}>
                    Delete all
                </button>
            </div>
            <button onClick={() => {
                changeFilter('all')
            }}>
                All
            </button>
            <button onClick={() => {
                changeFilter('active')
            }}>
                Active
            </button>
            <button onClick={() => {
                changeFilter('completed')
            }}>
                Completed
            </button>
            <button onClick={() => {
                changeFilter('first3')
            }}>
                First 3
            </button>
        </div>
    </div>
}