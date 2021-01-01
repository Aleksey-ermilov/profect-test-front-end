import React from 'react';

import './loader.scss'

const Loader = () => {
    return (
        <div className="loader">
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue-only loader_color">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;