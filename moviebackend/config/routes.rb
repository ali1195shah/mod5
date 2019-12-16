Rails.application.routes.draw do
  resources :orders
  resources :movies
  resources :carts
  resources :users, only: [:index, :show, :create]
  resources :login, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
