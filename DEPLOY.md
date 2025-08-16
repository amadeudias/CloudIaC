# Deploy do CloudIaC no Netlify

## Para deploy apenas do frontend (recomendado)

### Opção 1: Deploy via Netlify CLI
```bash
# 1. Instalar Netlify CLI
npm install -g netlify-cli

# 2. Fazer login
netlify login

# 3. Fazer build
npm run build

# 4. Deploy da pasta dist/public
netlify deploy --dir=dist/public --prod
```

### Opção 2: Deploy via Git no Netlify Dashboard
1. Conecte seu repositório GitHub no Netlify
2. Configure as seguintes opções:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
3. O arquivo `netlify.toml` já está configurado com os redirects necessários

## Arquivos importantes para o deploy

- `netlify.toml` - Configurações do Netlify
- `client/public/_redirects` - Redirects para SPA (copiado automaticamente para dist/public)

## Estrutura após build

```
dist/public/
├── _redirects         # Redireciona todas as rotas para index.html
├── index.html         # Página principal
└── assets/           # CSS e JS minificados
```

## Troubleshooting

### Erro 404 em rotas
- Certifique-se que o arquivo `_redirects` está presente em `dist/public`
- Verifique se o `netlify.toml` está na raiz do projeto

### Build falhando
- Execute `npm run build` localmente primeiro
- Verifique se todas as dependências estão no `package.json`