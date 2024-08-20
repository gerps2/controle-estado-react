import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

const fetchRepos = async (username: string): Promise<Repo[]> => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) {
    throw new Error('Falha ao buscar repositórios');
  }
  return response.json();
};

const ComoFunciona: React.FC = () => {
  const [username, setUsername] = useState('gerps2');
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['repos', username],
    queryFn: () => fetchRepos(username),
    enabled: !!username, // Habilita a consulta apenas se houver um username
    refetchOnWindowFocus: false, // Evita refetch ao focar a janela
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSearchClick = () => {
    refetch();
  };

  return (
    <div style={{ 
      backgroundColor: '#f4f4f9',
      color: '#333',
      padding: '20px',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <h1>Como Funciona o Estado HTTP com React Query</h1>
      
      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: '8px',
        textAlign: 'left',
        maxWidth: '800px',
        margin: '40px auto'
      }}>
        <h2>Exemplo Prático</h2>
        <p>
          Insira o nome de usuário do GitHub abaixo para buscar seus repositórios:
        </p>
        <div style={{ marginBottom: '20px' }}>
          <input 
            type="text" 
            value={username}
            onChange={handleInputChange}
            placeholder="Digite o nome de usuário do GitHub"
            style={{
              padding: '10px',
              width: '60%',
              marginRight: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px'
            }}
          />
          <button onClick={handleSearchClick} style={{
            padding: '10px 20px',
            backgroundColor: '#6200ea',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Buscar Repositórios
          </button>
        </div>
        <div style={{
          margin: '20px 0',
          padding: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
        }}>
          <h3>Repositórios de {username}</h3>
          {isLoading && <p>Carregando...</p>}
          {error && <p>Erro ao carregar dados: {(error as Error).message}</p>}
          <ul>
            {data?.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <h3>Como funciona essa implementação?</h3>
        <p>
          Neste exemplo, utilizamos o <strong>React Query</strong> para gerenciar o estado HTTP, que envolve fazer requisições a APIs e lidar com os dados recebidos.
          O React Query simplifica o processo de gerenciamento de dados assíncronos em aplicações React, fornecendo uma interface poderosa para trabalhar com requisições HTTP.
        </p>
        <ol>
          <li>
            <strong>Configuração do React Query:</strong> O React Query é configurado utilizando o <code>QueryClientProvider</code>, que envolve o aplicativo ou componentes específicos para fornecer o cliente do React Query que gerencia o cache e as requisições.
          </li>
          <li>
            <strong>Uso do Hook <code>useQuery</code>:</strong> O hook <code>useQuery</code> é a principal forma de fazer requisições HTTP. Ele lida automaticamente com o estado de carregamento, erro e sucesso, simplificando a lógica de gerenciamento de dados.
          </li>
          <li>
            <strong>Renderização Condicional:</strong> Durante a requisição, o estado de carregamento é exibido até que os dados sejam recebidos. Se houver um erro, ele é tratado e uma mensagem de erro é exibida.
          </li>
        </ol>
        <h3>Benefícios do React Query:</h3>
        <p>
          O React Query oferece várias vantagens ao gerenciar estado HTTP em aplicações React:
        </p>
        <ul>
          <li>
            <strong>Gerenciamento de Cache:</strong> Armazena em cache os dados recebidos, evitando requisições repetidas e melhorando o desempenho da aplicação.
          </li>
          <li>
            <strong>Sincronização Automática:</strong> Requisições podem ser reexecutadas automaticamente em intervalos de tempo ou quando a janela do navegador é focada, garantindo que os dados estejam sempre atualizados.
          </li>
          <li>
            <strong>Tratamento de Erros:</strong> Facilita o tratamento de erros, permitindo uma experiência de usuário mais robusta e intuitiva.
          </li>
          <li>
            <strong>Facilidade de Uso:</strong> Simplifica o código necessário para lidar com requisições HTTP, reduzindo a necessidade de hooks personalizados e lógica complexa.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComoFunciona;
