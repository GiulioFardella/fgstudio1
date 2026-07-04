import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";
import "../css/admin-login.css";

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const password = String(formData.get("password") || "");

    if (!password) {
      setError("Inserisci la password.");
      return;
    }

    setIsSending(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "Password non corretta.");
      }

      navigate("/admin", { replace: true });
    } catch (loginError) {
      setError(
        loginError.message || "Impossibile effettuare l'accesso. Riprova."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="admin-login">
      <section className="admin-login__panel">
        <p className="admin-login__eyebrow">FG STUDIO</p>

        <h1>Accesso amministratore.</h1>

        <p className="admin-login__intro">
          Area riservata alla gestione di contatti e richieste di preventivo.
        </p>

        <form className="admin-login__form" onSubmit={handleSubmit}>
          <div className="admin-login__field">
            <label htmlFor="admin-password">Password</label>

            <div className="admin-login__password-wrap">
              <input
                id="admin-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Password"
                disabled={isSending}
                required
              />

              <button
                type="button"
                className="admin-login__show-password"
                onClick={() => setShowPassword((current) => !current)}
                disabled={isSending}
              >
                {showPassword ? "Nascondi" : "Mostra"}
              </button>
            </div>
          </div>

          <button
            className="admin-login__submit"
            type="submit"
            disabled={isSending}
          >
            {isSending ? "Accesso in corso..." : "Accedi"}
          </button>

          {error && (
            <p
              className="admin-login__message admin-login__message--error"
              role="alert"
            >
              {error}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

export default AdminLogin;