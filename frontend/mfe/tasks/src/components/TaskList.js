import '@/components/TaskList.css';

import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import useJwtStore from 'store/jwtStore'; /* eslint-disable-line import/no-unresolved */

import api from '@/utils/api';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const jwt = useJwtStore(state => state.jwt);

    useEffect(() => {
        if (jwt) {
            setTasks(api.getTasks(jwt));
        }
    }, [jwt]);

    const checkChanged = (id, prevChecked) => {
        const updatedTasks = tasks.map(x => {
            api.checkedChanged(jwt, id, !prevChecked);
            return x.id === id
                ? {
                      id: x.id,
                      title: x.title,
                      description: x.description,
                      checked: !prevChecked,
                  }
                : x;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className='task-list'>
            <h3>Задачи на сегодня</h3>
            {tasks.map(x => {
                return (
                    <div key={x.id}>
                        <div>
                            <input checked={x.checked} type='checkbox' onChange={() => checkChanged(x.id, x.checked)} />
                            <span className={x.checked ? 'completed' : ''}>{x.title}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

TaskList.propTypes = {
    jwt: PropTypes.string,
};
