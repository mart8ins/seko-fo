const useProfileDataValidator = (firstName, lastName, email) => {
    if (firstName.length < 2 || lastName.length < 2) {
        return {
            valid: false,
            message: "First and last name must be at least 2 characters long."
        }
    }
    if (email.length < 6 || !email.includes("@") || !email.includes(".")) {
        return {
            valid: false,
            message: "Invalid email."
        }
    }

    return {
        valid: true,
        message: "Profile data change form validation successfull."
    }
}

export default useProfileDataValidator;