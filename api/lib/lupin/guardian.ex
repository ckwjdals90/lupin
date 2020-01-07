defmodule Lupin.Guardian do
  use Guardian, otp_app: :lupin

  alias Lupin.Auth.User

  def subject_for_token(resource, _claims) do
    sub = to_string(resource.id)
      {:ok, sub}
  end

  def subject_for_token(_, _) do
    {:error, :reason_for_error}
  end

  def resource_from_claims(%{"sub" => id}) do
    case Repo.get(User, id) do
      nil -> {:error, :reason_for_error}
      user -> {:ok, user}
    end
  end

end
