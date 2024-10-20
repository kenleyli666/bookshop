// ================================================
// For this scirpt, it is for the 'register-page' to check the Register-FormData is true for creating new user.
// Actions are:
// 1. Get FormData first (we receive 'dataSet' from register-index)
// 2. We call usersApi to get all the users data (this should not be done here but we just try to do the validation)
// 3. Once we get the Users-list, loop the list and compare with 'username(either uppercase/lowercase)' and 'email(won't have any limitation)'
// 4. For username, we compare with lowercase/uppercase to prevent duplicate data.
// 5. For email, since email is special, same userId but with diff @.com, i just let it go. But only checking is totally same.
// 6. For password, first check length of password-input (limit: >=8, <=16)
// 7. And we check if password-input === confirmPassword-input
// 8. Once all the checks are done with CorrectData which won't make the 'valid=true' to be false. We return the valid to handleSubmit in register-index for server to do the NewUserRegister.
// ================================================


// username == users.username ? continue : fail
// email === users.email ? continue : fail
// password === confirmPassword ? continue : fail
import axios from "axios";
export default async function CheckValid(dataSet) {

    const userList = await axios.get("http://localhost:8000/users")
    .then(res=>res.data)
    .catch(err=>console.log(err))
    let valid = true;

    function checkUserInfo() {
        userList.forEach(item => {
            if (item.username.toLowerCase() == dataSet.username.toLowerCase() || item.email == dataSet.email) {
                console.log('Existed Infomation! Please try to login.')
                valid = false
            }
        })
    }
    function checkPassword() {
        const {password, confirmPassword} = dataSet
        if (password.length < 8 || password.leng > 16) {
            console.log(
                'Password should be at least 8-digit long and maximum length is 16-digit.')
            valid = false
        }
        if (password !== confirmPassword) {
            console.log('Please check password inputs!')
            valid = false
        }
    }

    checkUserInfo()
    checkPassword()
    return valid
}