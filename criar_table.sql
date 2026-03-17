-- 1. Cria o usuário 'lazaros_user' com a senha 'senha123'
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'lazaros_user') THEN
        CREATE ROLE lazaros_user WITH LOGIN PASSWORD 'senha123';
    END IF;
END
$$;

-- 2. Garante que o usuário possa se conectar ao banco
GRANT CONNECT ON DATABASE lazaros TO lazaros_user;

-- Mudar para o banco lazaros
\c lazaros;

-- 3. Criação da tabela de usuários
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL CHECK (char_length(nome) >= 10),
    perfis TEXT[] NOT NULL CHECK (array_length(perfis, 1) > 0)
);

-- 4. Criação da tabela profile
CREATE TABLE IF NOT EXISTS profile (
    id SERIAL PRIMARY KEY,
    -- campo obrigatório e com mínimo de 5 caracteres
    descricao TEXT NOT NULL CHECK (char_length(descricao) >= 5)
);

-- 5. Dá permissões totais nas tabelas e sequências para o usuário lazaros_user
GRANT ALL PRIVILEGES ON TABLE usuarios TO lazaros_user;
GRANT ALL PRIVILEGES ON TABLE profile TO lazaros_user;

-- Permissão para que o usuário consiga usar os IDs autoincrementais (SERIAL)
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO lazaros_user;