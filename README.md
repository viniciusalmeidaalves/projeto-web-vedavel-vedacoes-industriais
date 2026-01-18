# Vedavel — Site Corporativo (Vedações Industriais)

Resumo rápido
------------
Aplicação PHP + MySQL para catálogo de produtos, área administrativa (CRUD) e formulário de contato com reCAPTCHA.

Tecnologias
----------
- Frontend: HTML5, CSS3, JavaScript (ES Modules)  
- Backend: PHP 7.4+ (estruturado em MVC leve)  
- Banco: MySQL / MariaDB  
- Opcional: Composer, Docker, PHPMailer, reCAPTCHA

Arquitetura geral
-----------------
- Separar código público (DocumentRoot) do restante da aplicação para segurança.  
- Camada de apresentação (templates/views) isolada da lógica (src).  
- Serviços reutilizáveis (Storage, Mail, Auth) centralizados em src/Service.  
- API/admin isolados para facilitar proteção por middleware/autenticação.  
- Assets versionados e organizados por tipo (css, js, images).

Principais arquivos e símbolos
------------------------------
- Entrada pública: public/index.php (front controller / roteamento simples)  
- Views / templates: templates/ (front/ e admin/)  
- Lógica: src/Controller, src/Model, src/Service, src/Repository  
- Config: config/env.example, config/settings.php  
- DB: sql/schema.sql  
- Scripts: scripts/migrate.php, scripts/backup.sh  
- Admin: admin/ (páginas e rotas protegidas)  
- Uploads públicos: public/uploads/ (validar/sanitizar nomes)

Fluxo de dados resumido
-----------------------
1. Requisição chega em public/index.php (front controller)  
2. Roteador resolve controlador → chama Controller que usa Services/Repositories  
3. Requisições públicas leem templates/front/*; admin usa templates/admin/* com autenticação  
4. Formulários → validação no Controller → Service (Mail/Storage) → Repository grava no DB  
5. Operações de upload passam por src/Service/Storage (validação MIME, tamanho, paths)

## 🖼 Prévia do Projeto 
*Página inicial do projeto Vedavel
<img width="1365" height="727" alt="image" src="https://github.com/user-attachments/assets/5018f39e-6f24-45f9-99f9-6056b57dccc9" />

*Portal administrativo
<img width="1363" height="725" alt="image" src="https://github.com/user-attachments/assets/a19969e2-d72d-4ac4-af66-a67cf42e3ade" />

*Painel Admin
<img width="1364" height="725" alt="image" src="https://github.com/user-attachments/assets/b91b48cb-3869-4d8b-8296-0d2a8e416778" />

## 📁 Acesso ao projeto

1. [visualizar o projeto na web](https://www.vedavel.com.br/)
