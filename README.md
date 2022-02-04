# moralis-tutorial

## moralisDashboard
### Browser
* Role
* Session
* User  
* AvaxBalance
* BscBalance
* BscTokenBalance
* BscTokenTransfers
* BscTransactions
* EthBalance
* EthTokenBalance
* EthTokenTransfers
* EthTransactions
* PolygonBalance
* PolygonTokenBalance
* PolygonTransactions
* _EthAddress

### Webhooks
### Jobs
### Logs
### Config
### API Console

```html
<html>
    <head>
        <title>Moralis</title>
        <script src="https://cdn.jsdeliver.net/npm/web3@latest/dist/web3.min.js"></script>
        <script src="https://npmcdn.com/moralis@latest/dist/moralis.js"></script>
    </head>

    <body>
        <h1>Moralis Login</h1>
        <button onclick="login()" id="login">Login</button>
        <script>
            const serverUrl="";
            const appId="";
            Moralis.start({ serverUrl, appId });

            async function login() {
                await Moralis.authenticate()
            }
        </script>
    </body>
</html>
```