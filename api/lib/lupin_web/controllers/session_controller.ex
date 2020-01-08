defmodule LupinWeb.SessionController do
  use LupinWeb, :controller

  alias Lupin.Repo
  alias Guardian.Plug

  def create(conn, params) do
    case authenticate(params) do
      {:ok, user} ->
        new_conn = Plug.sign_in(conn, user, :access)
        jwt = Plug.current_token(new_conn)

        new_conn
        |> put_status(:created)
        |> render("show.json", user: user, jwt: jwt)
      :error ->
        conn
        |> put_status(:unauthorized)
        |> render("error.json")
    end
  end

  def delete(conn, _) do
    jwt = Plug.current_token(conn)
    Lupin.Guardian.revoke(jwt)

    conn
    |> put_status(:ok)
    |> render("delete.json")
  end

  def refresh(conn, _params) do
    user = Plug.current_resource(conn)
    jwt = Plug.current_token(conn)
    {:ok, claims} = Plug.current_claims(conn)

    case Guardian.refresh(jwt, claims, %{ttl: {30, :days}}) do
      {:ok, new_jwt, _new_claaims} ->
        conn
        |> put_status(:ok)
        |> render("show.json", user: user, jwt: new_jwt)
      {:error, _reason} ->
        conn
        |> put_status(:unauthorized)
        |> render("forbidden.json", error: "Not authenticated")
    end
  end

  def unauthenticated(conn, _params) do
    conn
    |> put_status(:forbidden)
    |> render(LupinWeb.SessionView, "forbidden.json", error: "Not Authenticated")
  end

  defp authenticate(%{"email" => email, "password" => password}) do
    user = Repo.get_by(Lupin.Auth.User, email: String.downcase(email))

    case check_password(user, password) do
      true -> {:ok, user}
      _ -> :error
    end
  end

  defp check_password(user, password) do
    case user do
      nil -> Bcrypt.no_user_verify()
      _ -> Bcrypt.check_pass(password, user.password_hash)
    end
  end
end
