
export const usrFromForm = (formData) => {
    return { 
        username: formData.get("username"), 
        password: formData.get("password") 
    };
}

export const ptFromForm = (formData) => {
    return {
            x:formData.get("x"),
            y:formData.get("y"),
            r:formData.get("r"),
    };
}
