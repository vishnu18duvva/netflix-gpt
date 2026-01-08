const checkValidateFormData = (email, password, name) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFullNameValid = /^[A-Za-z\s]{2,50}$/.test(name);

    if (!isEmailValid) return "Invalid email format.";
    if (!isPasswordValid) return "Password must be 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
    if (!isFullNameValid) return "Name must be 2-50 characters long and contain only letters and spaces.";

    return null;
}
export default checkValidateFormData;
