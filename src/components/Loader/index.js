import React from 'react';

import './index.css';

const Loader = ({loader}) => loader && (
    <div className="loader flex align-center shadow pd-16 mr-bt-16">
        <div className="loader__image shimmer"></div>
        <div className="loader__container">
            <div className="loader__title shimmer mr-none mr-bt-16"></div>
            <div className="loader__text shimmer mr-bt-16"></div>
            <div className="flex flex-end align-center">
                <div className="loader__badg shimmer mr-rt-16"></div>
                <div className="loader__badg shimmer mr-rt-16"></div>
                <div className="loader__text shimmer"></div>
            </div>
        </div>
    </div>
);

export default Loader;