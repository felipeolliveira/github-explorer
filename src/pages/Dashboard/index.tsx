import React, { FormEvent, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

// import api from '../../services/api';

import logo from '../../assets/logo.svg';
import api from '../../services/api';
import { Title, Form, Repositories } from './styles';

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
  const [repositories, setRepositories] = useState<RepositoryData[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const { data } = await api.get<RepositoryData>(`/repos/${searchInput}`);

    setRepositories([...repositories, data]);
    setSearchInput('');
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div className="info">
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={32} color="#cbcbd6" />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
