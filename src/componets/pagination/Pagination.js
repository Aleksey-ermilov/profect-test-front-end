import React from 'react';

import './pagination.scss'

const Pagination = ({ list, onClick, selected }) => {
    return (
        <div className="pgt_pagination">
            <ul className="pagination">
                {
                    list.map( (item,index) => {
                        return (
                            <li
                                key={item.id}
                                className={`${selected.id === item.id ? 'active' : 'waves-effect'}`}
                                onClick={ () => onClick(item)}
                            >{index + 1}</li>
                        )
                    })
                }
            </ul>
        </div>

    );
};

export default Pagination;