import axiosInstance from "@/helpers/axiosInstance";
import { getLang } from "@/helpers/helper";

export const AccountSettings = {
    async update(postData) {
        try {
            const response = await axiosInstance.post(`api/${ getLang() }/account-settings/update`, postData);

            return response.data;
        } catch (err) {
            throw err;
        }
    },

    async updatePassword(postData) {
        try {
            const response = await axiosInstance.post(`api/${ getLang() }/account-settings/update-password`, postData);

            return response.data;
        } catch (err) {
            throw err;
        }
    }
}
