class CartSerializer < ActiveModel::Serializer
  attributes :id, :checkout
  has_one :user
end
