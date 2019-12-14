class OrderSerializer < ActiveModel::Serializer
  attributes :id
  has_one :cart
  has_one :movie
end
