/* Moralis init code */
const serverUrl = "https://nmamgu2cjaat.usemoralis.com:2053/server";
const appId = "pDj5JIBr9krM14yR5463zuby4J48S6NJ3pRsEfxP";
Moralis.start({ serverUrl, appId });

signUp = async (email, password) => {
    const user = new Moralis.User();
    user.set('username', email);
    user.set('email', email);
    user.set('password', password);
    const btnAvatar = $('#btnAvatar')[0];
    if (btnAvatar.files.length > 0) {
        const file = btnAvatar.files[0];
        const fileName = 'avatar.jpg';
        const avatarFile = new Moralis.File(FileName, file);
        
        /** object.set('variable_name', value); */
        user.set('avatar', avatarFile);
    }

    try {
        await user.signUp();
    } catch (error) {
        const code = error.code;
        const message = error.message;
    }
};

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

Moralis.Cloud.define('getItems', async (request) => {
    const query = new Moralis.Query('Item');
    const results = await query.find();
});

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;