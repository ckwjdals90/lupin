defmodule Lupin.Repo do
  use Ecto.Repo,
    otp_app: :lupin,
    adapter: Ecto.Adapters.Postgres
end
