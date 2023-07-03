import React, { useState, useEffect } from "react";
import axios from "axios";

const RepoList = () => {
  const [repos, setRepos] = useState([]);

  // Fetch repository data
  useEffect(() => {
    axios
      .get("https://api.github.com/users/melisamirando/repos")
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="bg-white py-20 sm:py-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
            My Repositories
          </h1>
          <div className="mx-auto max-w-2xl lg:mx-0 py-4">
            This is my public repository
          </div>
          {/* Styles to make 3 column */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-20 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {repos.map((repo) => (
              <div key={repo.id}>
                <div>
                  <div className="py-2">
                    <p className="inline-block mr-2">{repo.created_at}</p>
                    <p className="inline-block bg-gray-100 rounded-lg px-2">{repo.topics[0]}</p>
                  </div>
                  <h2 className="font-bold mb-2">{repo.name}</h2>
                  <p className="mb-2">{repo.description}</p>
                  <div className="py-4">
                    <img
                      src={repo.owner.avatar_url}
                      alt="Repo Owner"
                      className="h-10 w-10 rounded-full bg-gray-50 inline-block mr-2 "
                    />
                    <div className="inline-block px-4 mr-2">
                      <h4>{repo.owner.login}</h4>
                      <p>Batch RF-1</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoList;
