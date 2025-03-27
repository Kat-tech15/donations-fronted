import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

// Create an Axios instance with default settings
const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor to include the authentication token in requests
apiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API Methods
const api = {
  // Authentication
  login(userData) {
    return apiInstance.post("/users/login/", userData);
  },
  logout() {
    localStorage.removeItem("token"); // Remove token on logout
  },

  // Users
  getUsers() {
    return apiInstance.get("/users");
  },
  getUser(userId) {
    return apiInstance.get(`/users/${userId}`);
  },
  createUser(userData) {
    return apiInstance.post("/users", userData);
  },
  updateUser(userId, userData) {
    return apiInstance.put(`/users/${userId}`, userData);
  },
  deleteUser(userId) {
    return apiInstance.delete(`/users/${userId}`);
  },

  // Beneficiaries
  getBeneficiaries() {
    return apiInstance.get("/beneficiaries");
  },
  getBeneficiary(beneficiaryId) {
    return apiInstance.get(`/beneficiaries/${beneficiaryId}`);
  },
  createBeneficiary(beneficiaryData) {
    return apiInstance.post("/beneficiaries", beneficiaryData);
  },
  updateBeneficiary(beneficiaryId, beneficiaryData) {
    return apiInstance.put(`/beneficiaries/${beneficiaryId}`, beneficiaryData);
  },
  deleteBeneficiary(beneficiaryId) {
    return apiInstance.delete(`/beneficiaries/${beneficiaryId}`);
  },

  // Donations
  getDonations() {
    return apiInstance.get("/donations");
  },
  getDonation(donationId) {
    return apiInstance.get(`/donations/${donationId}`);
  },
  createDonation(donationData) {
    return apiInstance.post("/donations", donationData);
  },
  updateDonation(donationId, donationData) {
    return apiInstance.put(`/donations/${donationId}`, donationData);
  },
  deleteDonation(donationId) {
    return apiInstance.delete(`/donations/${donationId}`);
  },

  // Logistics
  getLogistics() {
    return apiInstance.get("/logistics");
  },
  schedulePickup(pickupData) {
    return apiInstance.post("/logistics/schedule_pickup", pickupData);
  },

  // Payments
  getPayments() {
    return apiInstance.get("/payments");
  },
  createPayment(paymentData) {
    return apiInstance.post("/payments", paymentData);
  },

  // Testimonials
  getTestimonials() {
    return apiInstance.get("/testimonials");
  },
  createTestimonial(testimonialData) {
    return apiInstance.post("/testimonials", testimonialData);
  },
};

export default api;
