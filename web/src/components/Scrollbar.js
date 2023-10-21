import React, { useEffect, useState, useRef } from 'react';

function CustomScrollbar({ children }) {
    return (
        <div className="scrollbar">
            <div className="thumb"></div>
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default CustomScrollbar;
