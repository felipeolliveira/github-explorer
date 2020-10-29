import React, { FormEvent, useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';

interface RepositoryData {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<RepositoryData[]>(
    getLocalRepo,
  );

  function getLocalRepo(): RepositoryData[] {
    const localRepos = localStorage.getItem('@GithubExplorer:repositories');

    if (!localRepos) {
      return [];
    }

    return JSON.parse(localRepos);
  }

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!searchInput) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const { data } = await api.get<RepositoryData>(`/repos/${searchInput}`);

      setRepositories([...repositories, data]);
      setSearchInput('');
      setInputError('');
    } catch (err) {
      setInputError(
        'Erro na busca por esse repositório. Lembre-se de buscar por autor/nome do repositório',
      );
    }
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Digite o auto/nome do repositório"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link
            to={`/repository/${repository.full_name}`}
            key={repository.full_name}
            href="teste"
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div className="info">
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={32} color="#cbcbd6" />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
