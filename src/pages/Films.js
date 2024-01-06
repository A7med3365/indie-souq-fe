import React, { useEffect, useState } from 'react';
import Search from '../components/common/Search';
import FilmCard from '../components/common/FilmCard';
import useRequest from '../hooks/use-request';
import { useLocation } from 'react-router-dom';

export default function Films() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]); // TODO: do this in the backend with a query param
  const [search, setSearch] = useState('');
  const { doRequest, isLoading } = useRequest({
    url: `/api/projects?min=true${query.get('all') ? '' : '&pub=1'}`,
    method: 'get',
    onSuccess: (res) => {
      console.log(res.data);
      const mappedProjects = res.data.map(
        ({
          title,
          type,
          genre,
          creator: { firstName, lastName },
          details: { media },
          id,
        }) => {
          return {
            name: title,
            by: `${firstName} ${lastName}`,
            type,
            genre,
            img: media[0],
            id,
          };
        }
      );
      setProjects(mappedProjects);
      setFilteredProjects(mappedProjects); // TODO: do this in the backend with a query param
    },
  });
  useEffect(() => {
    const fetchProjects = async () => {
      await doRequest();
    };
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TODO: do this in the backend with a query param
  useEffect(
    () => {
      if (search) {
        const filteredProjects = projects.filter((project) => {
          return project.name.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredProjects(filteredProjects);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [search]
  );

  // useEffect(() => console.log(projects), [projects]);
  useEffect(() => console.log(search), [search]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="flex justify-center my-[88px]">
        <Search setSearch={setSearch} />
      </div>
      <div class="grid grid-cols-3 w-full max-w-[1440px] m-auto gap-6">
        {filteredProjects.map((film, i) => {
          return <FilmCard film={film} size={'md'} />;
        })}
      </div>
    </div>
  );
}
