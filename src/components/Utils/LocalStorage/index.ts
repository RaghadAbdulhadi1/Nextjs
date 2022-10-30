interface IJsonFormate {
    email: string,
    username: string,
    password: string
}

const setLocalStorage = (storageData: IJsonFormate): void => {
    if (window.localStorage !== undefined) {
        try {
            localStorage.setItem("Users", JSON.stringify(storageData));
        }
        catch (err) {
            throw new Error(`${err}`);
        }
    }
}

const getLocalStorage = () => {
    const users: string | null = localStorage.getItem("Users");
    const data = users ? JSON.parse(users) : {};
    return data;
}

export { getLocalStorage, setLocalStorage };
