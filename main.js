/* Moralis init code */
const serverUrl = "https://nmamgu2cjaat.usemoralis.com:2053/server";
const appId = "pDj5JIBr9krM14yR5463zuby4J48S6NJ3pRsEfxP";
Moralis.start({ serverUrl, appId });

/* Add Moralis Authentication code */
async function login() {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
            .then(function (user) {
                console.log("logged in user:", user);
                console.log(user.get("ethAddress"));
            })
        .catch(function (error) {
            console.log(error);
        });
    }
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;