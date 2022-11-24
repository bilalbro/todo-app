import React from 'react';
import Task from './Task';

const TaskList = ({
   tasks,
   onRemoveTask,
   onUpdateTask,
   onTaskCompletionToggle,

   removeIndex,
   addingTask,
   clearingTasks
}) =>
{
   return <>
      <ol className="tasks-list">
         {tasks.map((task, i) => (
            <Task showing={addingTask & i === 0} bringingDown={addingTask && i !== 0}
               hiding={i === removeIndex || clearingTasks} bringingUp={i > removeIndex}
               key={task.id} onRemove={onRemoveTask} onUpdate={onUpdateTask}
               onCompletionToggle={onTaskCompletionToggle} {...task} />
         ))}
      </ol>
   </>
}

export default TaskList;