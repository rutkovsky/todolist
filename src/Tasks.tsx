type TasksType = {
    taskId: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string,
    tasks: TasksType[],
    students: Array<string>
}

export const Tasks = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                {props.tasks.map((el) => {
                    return (
                        <li key={el.taskId}><input type="checkbox" checked={el.isDone}/><span>{el.title}</span></li>)
                })}

            </ul>
            <h3>Students</h3>
            <ul>
                {props.students.map((el) => {
                    return (
                        <li>{el}</li>
                    )
                }
                    )}
                    </ul>
                    </div>
                    )
                }