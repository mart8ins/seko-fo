const formsValidator = (array) => {
    let valid = true;
    let message ="Form validation successfull.";

    array.forEach((needsValidation)=> {
        if(needsValidation.type === "name") {
            if(needsValidation.payload.length < 2) {
                    valid = false;
                    message = "First and last name must be at least 2 characters long.";
                    return     
            }
        }
        if(needsValidation.type === "email") {
            if (needsValidation.payload.length < 6 || !needsValidation.payload.includes("@") || !needsValidation.payload.includes(".")) {
                valid = false;
                message = "Invalid email.";
                return 
            }
        }
        if(needsValidation.type === "title") {
            if (needsValidation.payload.length < 5) {
                valid = false;
                message = "Title must be at least 5 characters long";
                return 
            }
        }
        if(needsValidation.type === "story") {
            if (needsValidation.payload.length < 50) {
                valid = false;
                message = "Story must be at least 50 characters long";
                return 
            }
        }
        if(needsValidation.type === "message") {
            if (needsValidation.payload.length < 1) {
                valid = false;
                message = "Realy? Empty message?";
                return 
            }
        }
    })
        return {
            valid,
            message
        }
}

export default formsValidator;