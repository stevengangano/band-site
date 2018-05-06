class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  #Redirect to /events after logging in
  def after_sign_in_path_for(resource)
  	events_path #your path
  end
end
