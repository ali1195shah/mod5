class User < ApplicationRecord
    has_many :carts, dependent: :destroy

    has_secure_password

    # validations. Checks to make sure username exists and is unique when creating user
    validates_presence_of :username
    validates_uniqueness_of :username, :case_sensitive => false
    
end
