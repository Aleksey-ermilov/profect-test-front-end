import React from 'react';

import './example.scss'

const Example = () => {
    return (
        <div className="example">
                <div className="col s12 exampleHeader">header</div>
                <div className="row mrg-0">
                    <div className="col m3 xl2 exampleNavTest">1</div>
                    <div className="col m9 xl10 exampleWorkPlace">2</div>
                </div>

        </div>
    );
};

export default Example;