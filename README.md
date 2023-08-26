**SIGN UP**

- 🛡️ **Authentication Handling with Local Storage**
  - 📲 Implemented user authentication using local storage.
  - 🖥️ Created a user interface with two pages: signup and profile.
  
- 📝 **Signup Page**
  - 📦 Utilized local storage to store user state.
  - 🔑 The user state in local storage includes all user properties and a randomly generated 16-byte access token.
  - 🟢 On successful signup, displayed a success message in green text.

- 🧑‍💼 **Profile Page**
  - 🚀 Redirected users to the /profile page after successful signup.
  - 📄 Displayed the user's details on the profile page.

- 🚪 **Logout Functionality**
  - 🚪 Implemented a logout button that resets all user states to null and removes the access token from local storage.

- 🔒 **Access Control**
  - 🛡️ Implemented scripts to control access to /profile and /signup.
  - 🔑 If the local storage lacks the access token, users attempting to access /profile are redirected to the signup page.
  - 🔒 If the local storage contains an access token and users try to access /sign up, they are redirected to the profile page.

- ❌🚫 **Error Handling**
  - ❌ Displayed error messages as shown in the UI for any signup validation issues.

- ✅ **Success Handling**
  - ✅ Displayed success messages in green text upon successful signup.
  - 🚀 Redirected users to the /profile page after successful signup.
