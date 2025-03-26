import axios from "axios";
import { de } from "vuetify/locale";

const API_URL = "http://127.0.0.1:8000/api";

const API = {
    getUsers() {
        return axios.get(`${API_URL}/users`);
    },
    getUser(userId) {
        return axios.get(`${API_URL}/users/${userId}`);
    },
    createUser(userData) {
        return axios.post(`${API_URL}/users`, userData);
    },
    updateUser(userId, userData) {
        return axios.put(`${API_URL}/users/${userId}`, userData);
    },
    deleteUser(userId) {
        return axios.delete(`${API_URL}/users/${userId}`);
    },

    getBeneficiaries() {
        return axios.get(`${API_URL}/beneficiaries`);
    },
    getBeneficiary(beneficiaryId) {
        return axios.get(`${API_URL}/beneficiaries/${beneficiaryId}`);
    },
    createBeneficiary(beneficiaryData) {
        return axios.post(`${API_URL}/beneficiaries`, beneficiaryData);
    },
    updateBeneficiary(beneficiaryId, beneficiaryData) {
        return axios.put(`${API_URL}/beneficiaries/${beneficiaryId}`, beneficiaryData);
    },
    deleteBeneficiary(beneficiaryId) {
        return axios.delete(`${API_URL}/beneficiaries/${beneficiaryId}`);
    },


    getDonation() {
        return axios.get(`${API_URL}/donations`);
    },
    getDonation(donationId) {
        return axios.get(`${API_URL}/donations/${donationId}`);
    },
    createDonation(donationData) {
        return axios.post(`${API_URL}/donations`, donationData);
    },
    updateDonation(donationId, donationData) {
        return axios.put(`${API_URL}/donations/${donationId}`, donationData);
    },
    deleteDonation(donationId) {
        return axios.delete(`${API_URL}/donations/${donationId}`);
    },


    getLogistics() {
        return axios.get(`${API_URL}/logistics`);
    },
    schedulePickup(pickupData) {
        return axios.post(`${API_URL}/logistics/schedule_pickup`, pickupData);
    },


    getPayments() {
        return axios.get(`${API_URL}/payments`);
    },
    createPayment(paymentData) {
        return axios.post(`${API_URL}/payments`, paymentData);
    },


    getTestimonials() {
        return axios.get(`${API_URL}/testimonials`);
    },
    createTestimonial(testimonialData) {
        return axios.post(`${API_URL}/testimonials`, testimonialData);
    },

};
export default API;