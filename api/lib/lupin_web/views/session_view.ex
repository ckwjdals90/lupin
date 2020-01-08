defmodule LupinWeb.SessionView do
  use LupinWeb, :view
  alias LupinWeb.SessionView

  def render("show.json", %{user: user}) do
    %{
      data: render_one(user, UserView, "user.json")
    }
  end

  def render("error.json", _) do
    %{error: "Invalid email or password"}
  end

  def render("delete.json", _) do
    %{ok: true}
  end

  def render("forbidden.json", %{error: error}) do
    %{error: error}
  end
end
