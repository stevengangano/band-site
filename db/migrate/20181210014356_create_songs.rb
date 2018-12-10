class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
    	t.string :song

      t.timestamps null: false
    end
  end
end

