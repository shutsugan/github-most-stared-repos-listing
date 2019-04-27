import React from 'react';
import moment from 'moment';

import './index.css';

const RepoItem = ({repo}) => (
    <div className="repo-item flex align-center shadow pd-16 mr-bt-16">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <img 
                className="repo-item__image shadow mr-rt-16" 
                src={repo.owner.avatar_url}
                alt={repo.owner.login}
            />
        </a>
        <div className="repo-item__infos">
            <h2 className="repo-item__title mr-none mr-bt-16">{repo.name}</h2>
            <div className="repo-item__description mr-bt-16">{repo.description}</div>
            <div className="flex flex-end align-center">
                <div 
                    className="badg badg-star mr-rt-16" 
                    title="Repo Stars">
                    {repo.stargazers_count}
                </div>
                <div 
                    className="badg mr-rt-16"
                    title="Repo Issues">
                    {repo.open_issues_count} !
                </div>
                <div className="repo-item__owner">
                    {moment(repo.created_at).startOf('day').fromNow()}
                    <span> by {repo.owner.login}</span>
                </div>
            </div>
        </div>
    </div>
);

export default RepoItem;