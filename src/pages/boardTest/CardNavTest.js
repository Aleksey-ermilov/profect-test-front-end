import React from 'react';

const CardNavTest = ({item, currentTestId, onSelect}) => {
    const onClick = () => {
        onSelect(item)
    }
    return (
        <button
            className={`board_nav_card ${currentTestId === item.id ? "board_nav_card_focus" : ""}`}
            onClick={onClick}
        >
            <h3 className="board_nav_card_header">{item.nameTest}</h3>
            <div className="board_nav_card_text">{item.idTeacher}</div>
        </button>
    );
};

export default CardNavTest;