class Song < ActiveRecord::Base
	belongs_to :user, -> { order "title asc" }
end

