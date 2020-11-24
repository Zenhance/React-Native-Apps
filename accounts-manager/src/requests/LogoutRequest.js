import {AzureClient} from "../clients/AzureClient";

const Logout = (token_type,token) => {
    return AzureClient.post("/api/logout",{},{headers:{'Authentication':token_type+" "+token}})
};

export {Logout};
