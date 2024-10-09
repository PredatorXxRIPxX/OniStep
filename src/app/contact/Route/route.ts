export const postToEmail = async (email: string, message: string) => {
    const params = new URLSearchParams(
        {
            email: email,
            message: message
        }
    ).toString()
    const response = await fetch(`https://onistep.com/OniStep/php/api_formulaire?${params}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    
    return response;
}