# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :lupin,
  ecto_repos: [Lupin.Repo]

# Configures the endpoint
config :lupin, LupinWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "yqb5LvhJxYXOERudfDUij2KHxb2I7aik9/zfXjl7A3b5kOe4Edcl/PJASfm4xgMz",
  render_errors: [view: LupinWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Lupin.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

#
config :lupin, Lupin.Auth.Guardian,
issuer: "Lupin",
verify_issuer: true,
ttl: {30, :days}

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
