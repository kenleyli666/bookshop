// For this script, we try to do the login-validation.
// Get email and password input first from login-index
// call the CheckLogin with these 2 inputs
// call the userList api and check if === with those inputs.
// Set the website to be login as the user (putting the user into theUser[])

export default async function CheckLogin(dataSet,userList) {
    let theUser = null
    userList.forEach(item => {
        if (item.email === dataSet.email && item.password === dataSet.password) {
            return theUser = item
        }
    })
    if (!theUser) {
        console.log('somethign wrong in vlaid!!!')
    }
    return {
        username: theUser.username,
        icon_image: theUser.icon_image
    };
}


