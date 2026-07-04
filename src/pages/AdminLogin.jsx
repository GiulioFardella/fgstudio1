import { useState } from "react";
import "../css/admin-login.css";

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Login non ancora collegato al backend.");
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
            <label htmlFor="admin-username">Username</label>
            <input
              id="admin-username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="Username admin"
              required
            />
          </div>

          <div className="admin-login__field">
            <label htmlFor="admin-password">Password</label>

            <div className="admin-login__password-wrap">
              <input
                id="admin-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Password"
                required
              />

              <button
                type="button"
                className="admin-login__show-password"
                onClick={() => setShowPassword((current) => !current)}
              >
                {showPassword ? "Nascondi" : "Mostra"}
              </button>
            </div>
          </div>

          <button className="admin-login__submit" type="submit">
            Accedi
          </button>

          {message && (
            <p className="admin-login__message" role="status">
              {message}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

export default AdminLogin;