import api from "../../services/api";

export const fetchCamperByIdApi = (id) => {
  return api.get(`/campers/${id}`);
};

export const fetchCampersApi = (filters = {}, page = 1, limit = 4) => {
  const params = {
    page,
    limit,
  };

  if (filters.location) {
    params.location = filters.location;
  }

  if (filters.vehicleType) {
    params.form = filters.vehicleType;
  }

  Object.entries(filters.features || {}).forEach(([key, value]) => {
    if (value) {
      params[key] = true;
    }
  });

  return api.get("/campers", { params });
};
