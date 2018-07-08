import React from 'react';

const DraftLinkList = ({ teamOneUrl, teamTwoUrl, observerUrl, ...otherProps }) => (
    <div className="draft-link">
        <ul className="link-list">
            <li className="link-iterm">{teamOneUrl}</li>
            <li className="link-iterm">{teamTwoUrl}</li>
            <li className="link-iterm">{observerUrl}</li>
        </ul>
    </div>
);

export default DraftLinkList;