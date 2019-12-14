class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def show
        user_id = params[:id]
        user = User.find(user_id)
        render json: user
    end

    def destroy
      User.destroy(params[:id])
    end
    
    private
  
    def user_params
      params.require(:user).permit(:username, :password)
    end
end
