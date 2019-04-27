import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Loader from '../Loader';
import RepoItem from '../RepoItem';
import { uri } from '../../config';

const ReposList = _ => {
    const [ref, inView] = useInView({threshold: 0});
    const [page, setPage] = useState(1);
    const [loader, setLoader] = useState(true);
    const [repos, setRepos] = useState([]);

    useEffect(_ => {
        async function fetchRepos() {
            setLoader(true);

            const url = `${uri}${page}`;
            const res = await fetch(url);
            const data = await res.json();

            setRepos(repos.concat(data.items));
            setPage(page + 1);
            setLoader(false);
        }

        (inView || page === 1) && fetchRepos();
    }, [inView]);

    const reposList = repos.map((repo, index) => (
        <RepoItem key={index} repo={repo} />
    ));

    return (
        <div className="repos-list pd-16">
            <ul className="flex flex-column">{reposList}</ul>
            {!loader && <div ref={ref}></div>}
            <Loader loader={loader} />
        </div>
    );
};

export default ReposList;