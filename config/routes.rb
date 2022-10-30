Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  root "homes#index"
  resources :homes
end
