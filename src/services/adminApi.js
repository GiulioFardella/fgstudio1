import { API_BASE_URL } from "../config";

class AdminApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

async function getCsrfToken() {
  const response = await fetch(`${API_BASE_URL}/api/admin/auth/csrf`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new AdminApiError(
      data?.message || "Impossibile ottenere il token di sicurezza.",
      response.status
    );
  }

  if (!data?.token) {
    throw new AdminApiError(
      "Token di sicurezza non disponibile.",
      0
    );
  }

  return data;
}

async function adminRequest(path, options = {}) {
  const {
    method = "GET",
    body,
  } = options;

  const headers = {
    Accept: "application/json",
  };

  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  if (method !== "GET" && method !== "HEAD") {
    const csrf = await getCsrfToken();

    headers[csrf.headerName || "X-CSRF-TOKEN"] = csrf.token;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    credentials: "include",
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new AdminApiError(
      data?.message || "Impossibile completare l'operazione.",
      response.status
    );
  }

  return data;
}

export function getAdminContacts() {
  return adminRequest("/api/admin/contacts");
}

export function getAdminContactById(id) {
  return adminRequest(`/api/admin/contacts/${id}`);
}

export function getAdminQuotes() {
  return adminRequest("/api/admin/quotes");
}

export function getAdminQuoteById(id) {
  return adminRequest(`/api/admin/quotes/${id}`);
}

export function updateAdminContact(id, payload) {
  return adminRequest(`/api/admin/contacts/${id}`, {
    method: "PATCH",
    body: payload,
  });
}

export function updateAdminQuote(id, payload) {
  return adminRequest(`/api/admin/quotes/${id}`, {
    method: "PATCH",
    body: payload,
  });
}

export function deleteAdminContact(id) {
  return adminRequest(`/api/admin/contacts/${id}`, {
    method: "DELETE",
  });
}

export function deleteAdminQuote(id) {
  return adminRequest(`/api/admin/quotes/${id}`, {
    method: "DELETE",
  });
}