defmodule LupinWeb.Router do
  use LupinWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", LupinWeb do
    pipe_through :api
  end
end
