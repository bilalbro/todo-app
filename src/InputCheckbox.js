import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa'
import {classNames} from './utils';

const InputCheckbox = ({
   checked,
   onChange
}) => {
   const [localChecked, setLocalChecked] = useState(checked);

   return <>
      <label>
         <input type="checkbox" checked={localChecked} onChange={(e) => {
            setLocalChecked(e.target.checked);
            onChange(e);
         }} style={{display: 'none'}} />

         <div className={classNames({
            'task_btn': true,
            'task_checkbox': true,
            'task_checkbox--sel': checked
         })}>
            {checked && <FaCheck />}
         </div>
      </label>
   </>;
};

export default InputCheckbox;