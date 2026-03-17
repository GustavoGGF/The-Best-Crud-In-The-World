# The Best Crud In The World

Pré-requisitos
Antes de começar, certifique-se de ter instalado:

Java 17 ou superior

Maven 3.x

PostgreSQL 14+

Angular 8.2.14 & Node.js v12.22.12 (caso deseje rodar o frontend separadamente)

Configuração do Banco de Dados
O sistema exige a criação prévia das tabelas e permissões. Execute o script SQL de acordo com seu sistema operacional:

Linux
Bash
sudo -u postgres psql -f criar_table.sql

Windows
PowerShell
psql -U postgres -d lazaros -f criar_table.sql

Executando o Backend (Spring Boot)
O backend gerencia as regras de negócio e a API REST. Para compilar e rodar, acesse a pasta backend e execute:

Bash
mvn clean install
mvn spring-boot:run
O servidor iniciará por padrão em: http://localhost:8080

Executando o Frontend (Angular)
Os arquivos estáticos do Angular já estão integrados ao backend (em src/main/resources/static). No entanto, para desenvolvimento ou builds manuais, utilize os scripts automatizados na raiz do projeto:

No Windows
Execute o arquivo de lote para build e deploy:

PowerShell
./build_and_run.bat

No Linux
Dê permissão de execução e rode o shell script:

Bash
chmod +x build_and_run.sh
./build_and_run.sh

Testes
Para rodar os testes unitários e validar a integridade do sistema:

Bash
mvn test
Os logs de teste detalhados (Records, mocks e asserts) serão exibidos no console.
