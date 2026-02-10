import { api } from "../../services/api";

export const getCampers = (params) =>
    api.get("/campers", { params });

export const getCamperById = (id) =>
    api.get(`/campers/${id}`);