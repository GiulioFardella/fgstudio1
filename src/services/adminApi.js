import { API_BASE_URL } from "../config";

class AdminApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

function getCookie(name) {
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${name}=`));

  if (!cookie) {
    return null;
  }

  return decodeURIComponent(cookie.split("=")[1]);
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
    const csrfToken = getCookie("XSRF-TOKEN");

    if (!csrfToken) {
      throw new AdminApiError(
        "Token di sicurezza non disponibile. Ricarica la pagina e riprova.",
        0
      );
    }

    headers["X-XSRF-TOKEN"] = csrfToken;
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