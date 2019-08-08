class SessionsController < ApplicationController
  before_action :require_no_user!

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(email: params[:email], password: params[:password])
    if @user
      login_user!(@user)
      redirect_to root_url, notice: "Logged in!"
    else
      flash.now.alert = "Email or password is invalid"
      render :new
    end
  end

  def destroy
    logout_user!
    redirect_to new_session_url
  end
end
