require 'test_helper'

class AudioControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
