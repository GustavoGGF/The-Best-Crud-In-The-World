-- ====================================================
-- 1. SETUP DO BANCO E USUÁRIO (Rode como superuser 'postgres')
-- ====================================================

-- Mata conexões ativas para permitir o DROP
SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE datname = 'lazaros' AND pid <> pg_backend_pid();

DROP DATABASE IF EXISTS lazaros;
CREATE DATABASE lazaros;

-- Criação do usuário do sistema para a aplicação
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'lazaros_user') THEN
        CREATE ROLE lazaros_user WITH LOGIN PASSWORD 'senha123';
    END IF;
END
$$;

-- Conecta no novo banco
\c lazaros;

-- ====================================================
-- 2. CRIAÇÃO DAS TABELAS
-- ====================================================

-- Tabela PROFILE (Catálogo de perfis disponíveis)
CREATE TABLE IF NOT EXISTS profile (
    id SERIAL PRIMARY KEY,
    descricao TEXT NOT NULL UNIQUE CHECK (char_length(descricao) >= 5)
);

-- Tabela USUARIOS (Com Array de Texto para múltiplos perfis)
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL CHECK (char_length(nome) >= 10),
    -- Armazena os nomes dos perfis diretamente
    perfis TEXT[] NOT NULL CHECK (array_length(perfis, 1) > 0)
);

-- ====================================================
-- 3. PERMISSÕES E DADOS INICIAIS
-- ====================================================

-- Garante que o usuário da aplicação tenha acesso total
GRANT CONNECT ON DATABASE lazaros TO lazaros_user;
GRANT ALL PRIVILEGES ON TABLE usuarios TO lazaros_user;
GRANT ALL PRIVILEGES ON TABLE profile TO lazaros_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO lazaros_user;

-- Inserção de perfis padrão para o seu teste (Opcional)
INSERT INTO profile (descricao) VALUES ('ADMINISTRADOR'), ('USUARIO'), ('GERENTE') 
ON CONFLICT DO NOTHING;