The Best Crud In The World

## 1. Pré-requisitos

Para a correta execução do projeto, as seguintes dependências devem estar instaladas no ambiente:

- **Java**: Versão 17 ou superior.
- **Maven**: Versão 3.x.
- **PostgreSQL**: Versão 14 ou superior.
- **Angular & Node.js**: v8.2.14 e v12.22.12 respectivamente (necessários apenas para execução independente do frontend).

---

## 2. Configuração do Banco de Dados

O sistema exige a criação prévia das tabelas e permissões. Execute o script SQL de acordo com seu sistema operacional:

### Linux (Bash)

```bash
sudo -u postgres psql -f criar_table.sql
```

### Windows (PowerShell)

Certifique-se de que o executável `psql` esteja no seu PATH e execute:

```powershell
psql -U postgres -d lazaros -f arquivo.sql
```

---

## 3. Execução do Backend (Spring Boot)

O backend gerencia as regras de negócio e serve a API REST. Para compilar e rodar, acesse o diretório `backend` e execute os comandos abaixo:

### Comandos de Build e Execução

````bash
mvn clean install
mvn spring-boot:run
O servidor será iniciado por padrão em: http://localhost:8080

---

## 4. Execução do Frontend (Angular)
Os arquivos estáticos do Angular já estão integrados ao backend (localizados em `src/main/resources/static`). Caso deseje realizar builds manuais ou automação de deploy, utilize os scripts na raiz do projeto:

### Ambiente Windows (PowerShell)
Execute o arquivo de lote para realizar o build e o deploy:
```powershell
./build_and_run.bat

### Ambiente Linux (Bash)
Dê permissão de execução e rode o shell script:

```bash
chmod +x build_and_run.sh
./build_and_run.sh
````

---

## 5. Testes Unitários

O projeto utiliza JUnit 5 e Mockito para validação da integridade do sistema e das regras de negócio. Para executar a suíte de testes, utilize o comando abaixo:

### Execução via Maven

```bash
mvn test
```
